
const { Sequelize } = require('sequelize')
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME, // Database name
    process.env.DB_USER, // Database username
    process.env.DB_PASSWORD, // Database password
    {
        host: 'db', // Database host
        dialect: 'postgres'
    }
)

const connectDb = async () => {
    try {
        await sequelize.authenticate()
        console.log('Connection has been established successfully.')
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
}

module.exports = { sequelize, connectDb }