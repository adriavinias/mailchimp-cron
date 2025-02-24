const nodemailer = require("nodemailer");
const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, EMAIL_FROM } = require("../config");

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: { user: SMTP_USER, pass: SMTP_PASS },
});

async function sendEmail(to, subject, html) {
  try {
    await transporter.sendMail({ from: EMAIL_FROM, to, subject, html });
    console.log(`📧 Correo enviado a ${to}`);
  } catch (error) {
    console.error(`❌ Error enviando a ${to}:`, error);
  }
}

module.exports = { sendEmail };
