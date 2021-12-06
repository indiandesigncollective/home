import express from 'express'
//import products from './data/products.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import colors from 'colors'
import morgan from 'morgan'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import passport from 'passport'
import exphbs from 'express-handlebars'
//import oAuth from './routes/oAuth.js'

const google = require('googleapis').google
const oAuth = google.auth.OAuth2
const config = require('./config')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

dotenv.config()
connectDB()
const app = express()

if(process.env.NODE_ENV === 'development') {
   app.use(morgan('dev')) 
}

app.use(express.json())

// Handlebars
app.engine('.hbs',exphbs.engine({defaultLayout: 'main', extname: '.hbs',}))
app.set('view engine', '.hbs')

app.get('/', (req, res) => {
    res.send('API is running....')
})

//Routes
app.use('/', oAuth) //this is connector, hitting /ld will give login 
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)

// app.set('view engine', 'ejs')
// app.get('/auth/google', function(req,res){
//     passport.authenticate('google', { scope: ['profile']})
// })

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))