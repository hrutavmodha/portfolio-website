const contact = (req, res, next) => {
    console.log(`Received request body as:\n${req.body}`)
    next()
}
module.exports = contact