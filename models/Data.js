const Sequelize = require('sequelize')
const db = require('../db/database')

const Data = db.define('date', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    date: {
        type: Sequelize.DATE
    },
    time: {
        type: Sequelize.TIME
    }
})

module.exports = Data