const express = require('express')
const cors = require('cors')
const contact = require('./handlers/contactMe')
require('dotenv').config()
const app = express()
app.use(cors({
    origin: process.env.VITE_FRONTEND_URL,
    methods: ['POST']
}))
app.use(express.json())
app.post('/contact', (req, res) => {
    contact(req, res)
})
app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}`)
})