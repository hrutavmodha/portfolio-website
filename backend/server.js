const express = require('express')
const cors = require('cors')
const contact = require('./handlers/contactMe')
const connect = require('./db')
require('dotenv').config()
const app = express()
app.use(cors({
    origin: process.env.VITE_FRONTEND_URL,
    methods: ['POST', 'GET']
}))
app.use(express.json())
connect('portfolio')
app.post('/contact', (req, res) => {
    contact(req, res)
})
module.exports = app