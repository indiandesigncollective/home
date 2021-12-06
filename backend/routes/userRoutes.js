import express from 'express'
const router = express.Router()
import { 
    authUser, 
    registerUser, 
    getUserProfile, 
    updateUserProfile } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
router.get('/auth/google', (req,res) =>{
    const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);

    const loginLink = oauth2Client.generateAuthUrl({
    access_type: 'offline', // Indicates that we need to be able to access data continously without the user constantly giving us consent
    scope: CONFIG.oauth2Credentials.scopes // Using the access scopes from our config file
    });

    return res.json({loginLink});
})

export default router