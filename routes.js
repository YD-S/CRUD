
const express = require('express')
const router = express.Router()

router.get('/users', (req, res) => {
    res.status(200).json({ message: 'This is the API' })
})

module.exports = router