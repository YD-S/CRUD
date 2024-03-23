
const express = require('express')
const {sequelize, connectDb} = require('./db')
const apiRoutes = require('./routes')

const app = express()

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' })
})

app.listen(3000, async () => {
  console.log('Server is running on port 3000')
    await connectDb()
})