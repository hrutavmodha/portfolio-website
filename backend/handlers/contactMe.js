const messages = require('../schemas/messages')
const contact = (req, res) => {
    const { name, contact, subject, message } = req.body
    res.status(200).json({
        message: 'Message sent successfully'
    })
    messages.insertOne({
        name: name,
        contact: contact,
        subject: subject,
        message: message
    })
}
module.exports = contact