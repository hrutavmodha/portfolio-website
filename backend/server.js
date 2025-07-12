const express = require('express')
const cors = require('cors')
const contact = require('./handlers/contactMe')
const connect = require('./db')
const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['POST', 'GET']
}))
app.use(express.json())
connect('portfolio')
app.post('/contact', (req, res) => {
    contact(req, res)
})
app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000')
});