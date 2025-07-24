const express = require('express')
const cors = require('cors')
const contact = require('./handlers/contactMe')
require('dotenv').config()
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET']
}))
app.use(express.json())
app.post('/contact', (req, res) => {
    contact(req, res)
})
app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Server is running at http://${process.env.HOST}:${process.env.PORT}`)
})