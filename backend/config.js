const baseURL = "http://localhost:5000"

module.exports = {
  // The secret for the encryption of the jsonwebtoken
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: 5000,
  // The credentials and information for OAuth2
  oauth2Credentials: {
    client_id: process.env.CLIENT_ID,
    project_id: "Indian Design Collective", // The name of your project
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: process.env.CLIENT_SECRET,
    redirect_uris: [
      `${baseURL}/auth_callback`
    ],
    scopes: [
      'https://www.googleapis.com/auth/youtube.readonly'
    ]
}}
// import User from 'models/userModel.js'
// import passport from 'passport'
// //no idea what this does
// app.use(session({
//     secret: "Our secret",
//     resave: false,
//     saveUninitialized:false
// }))

// //@desc OAuth user
// //@route POST/api/users/login
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// //passport.use(User.createStrategy())
// // passport.serializeUser(User.serializeUser())
// // passport.deserializeUser(User.deserializeUser())

//
