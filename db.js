const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/petition_db.sqlite'
})

module.exports = sequelize