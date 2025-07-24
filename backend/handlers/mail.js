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
                <p>Hi, Hrutav Modha. My name is ${name}!<br/><br/>${message}</p>
            </div>
        `
    }
    await transporter.sendMail(mailOptions)
    console.log('Email sent successfully')
}