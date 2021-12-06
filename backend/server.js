import express from 'express'
//import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import morgan from 'morgan'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import cookieParser from 'cookie-parser'
import { createRequire } from 'module'
import jwt from 'jsonwebtoken'
import axios from 'axios'
import User from './models/userModel.js'
import generateToken from './utils/generateToken.js'
const require = createRequire(import.meta.url)
const CONFIG = require('./config.cjs')
const google = require('googleapis').google
const OAuth2 = google.auth.OAuth2

dotenv.config()
connectDB()
const app = express()

app.use(cookieParser())
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running....')
})

//Routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

app.get('/auth_callback', async function (req, res) {
    const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);
    if (req.query.error) {
        return res.redirect('/');
    } else {
        try {
            const { tokens } = await oauth2Client.getToken(req.query.code)
            res.cookie('jwt', jwt.sign(tokens, CONFIG.JWTsecret));
            const googleUser = await axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
                {
                    headers: {
                        Authorization: `Bearer ${tokens.id_token}`,
                    },
                },
            ).then(res => res.data).catch(error => {
                throw new Error(error.message);
            });
            let name = googleUser.name
            let email = googleUser.email
            const user = (await User.findOne({ email })) || (await User.create({
                name,
                email,
                password:null,
            }))
            return res.redirect(`http://localhost:3000?setUserInfo=${Buffer.from(JSON.stringify({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
            })).toString('base64')}`)
        } catch (error) {
            console.error(`Error: ${error.message}`.red.underline.bold)
        }
    }
}
)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))