require('dotenv').config();
module.exports = {
    API_URL:process.env.API_URL,
    SMTP_HOST:process.env.SMTP_HOST,
    SMTP_PORT:process.env.SMTP_PORT,
    SMTP_USER:process.env.SMTP_USER,
    SMTP_PASS:process.env.SMTP_PASS,
    EMAIL_FROM: process.env.EMAIL_FROM
}