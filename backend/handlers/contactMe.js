const mailMe = require('./mail')
const contact = (req, res) => {
    mailMe(req.body)
    res.status(200).json({
        message: 'Message sent successfully'
    })
}
module.exports = contact