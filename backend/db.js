require('dotenv').config()
const mongo = require('mongoose')
const connect = () => {
    const req = mongo.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    req.then(() => {
        console.log('Connected to MongoDB successfully')
    })
    req.catch((error) => {
        console.log(error)
    })
}
module.exports = connect