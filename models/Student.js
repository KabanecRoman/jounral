const Sequelize = require('sequelize')
const db = require('../db/database')

const Student = db.define('students', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    group_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'groups',
        referencesKey: 'id'
    },
    number_list: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.TEXT,
    },
    surname: {
        type: Sequelize.TEXT,
    },
    patronymic: {
        type: Sequelize.TEXT,
    }
})

module.exports = Student