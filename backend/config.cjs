const baseURL = "http://localhost:5000"
require("dotenv").config


module.exports = {
  // The secret for the encryption of the jsonwebtoken
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: 5000,
  // The credentials and information for OAuth2
  oauth2Credentials: {
    client_id: "553197038984-hhobq7kr3rpqbsogacn19khvc9cru7nv.apps.googleusercontent.com",
    project_id: "Indian Design Collective", // The name of your project
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_secret: "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",
    redirect_uris: [
      `${baseURL}/auth_callback`
    ],
    scopes: [
      'openid', 'https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile', 'profile'
    ]
}}