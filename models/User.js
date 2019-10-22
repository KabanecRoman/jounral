const Sequelize = require('sequelize')
const db = require('../db/database')

const User = db.define('user', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT
    },
    surname: {
        type: Sequelize.TEXT
    },
    patronymic: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.TEXT
    },
    password: {
        type: Sequelize.STRING
    }
})

module.exports = User