const mongo = require('mongoose')
const msgSchema = new mongo.Schema({
    name: {
        type: String,
        require: true
    },
    contact: {
        type: String,
        require: true
    },
    subject: {
        type: String,
        require: false
    },
    message: {
        type: String,
        require: true
    }
})
module.exports = mongo.model('messages', msgSchema)