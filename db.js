
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'mydatabase',
    'postgres',
    'postgres',
    {
        host: 'db',
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