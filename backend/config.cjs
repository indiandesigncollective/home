//config for oauth2 with credentials

const baseURL = "http://localhost:5000"
require("dotenv").config

module.exports = {
  JWTsecret: 'mysecret',
  baseURL: baseURL,
  port: 5000,
  oauth2Credentials: {
    client_id: "553197038984-hhobq7kr3rpqbsogacn19khvc9cru7nv.apps.googleusercontent.com",
    project_id: "Indian Design Collective", 
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
  }
}