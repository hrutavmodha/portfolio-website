require('dotenv').config()
const mailer = require('nodemailer')
module.exports = async function mailMe(reqBody) {
    const { name, email, subject, message } = reqBody
    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.GMAIL_APP_PASSWORD
        }
    })
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: subject,
        html: `
            <div style="font-family: Roboto, sans-serif; line-height: 1.6;">
                <h1 align="center">${subject}</h1>
                <b>This is a message from your portfolio website contact form, filled out by ${name} (${email}):</b>
                <p>${message}</p>
            </div>
        `
    }
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
}