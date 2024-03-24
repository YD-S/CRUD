
const express = require('express')
const bodyParser = require('body-parser')
const {sequelize, connectDb} = require('./db')
const apiRoutes = require('./routes')
const User = require('./models/user')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    next()
})

app.use('/api', require('./routes'))

app.use('/' , (req, res, next) => {
    res.send('Welcome to the home page')
})

app.use((error, req, res, next) => {
    console.log(error)
    const status = error.statusCode || 500
    const message = error.message
    res.status(status).json({ message: message })
})

sequelize
    .sync()
    .then(result => {
        app.listen(3000, () => {
            console.log('Server running on port 3000')
        })
    })
    .catch(err => console.log(err))