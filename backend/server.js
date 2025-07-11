const express = require('express')
const cors = require('cors')
const contact = require('./handlers/contactMe')
const app = express()
app.use(cors())
app.use(express.json())
app.post('/contact', contact)
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
});