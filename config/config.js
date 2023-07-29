require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser:  process.env.DB_USER,
  dbPassword:  process.env.DB_PASSWORD,
  dbHost:  process.env.DB_HOST,
  dbName:  process.env.DB_NAME,
  dbPort:  process.env.DB_PORT,
  apiKey: process.env.API_KEY,
  jwt_secret: process.env.JWT_SECRET,
  sender: process.env.SENDER,
  to: process.env.TO,
  password_email: process.env.PASSWORD_EMAIL
}

module.exports = { config };
