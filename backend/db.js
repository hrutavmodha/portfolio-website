const mongo = require('mongoose')
const connect = (db) => {
    const req = mongo.connect(`mongodb://localhost:27017/${db}`)
    req.then(() => {
        console.log('Connected to MongoDB successfully')
    })
    req.catch((error) => {
        console.log(error)
    })
}
module.exports = connect