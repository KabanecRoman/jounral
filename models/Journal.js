const Sequelize = require('sequelize')
const db = require('../db/database')

const Journal = db.define('journals', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'users',
        referencesKey: 'id'
    },
    subject_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'subjects',
        referencesKey: 'id'
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'students',
        referencesKey: 'id'
    },
    date_id : {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: 'dates',
        referencesKey: 'id'
    },
    true: {
        type: Sequelize.BOOLEAN
    },
    note: {
        type: Sequelize.TEXT
    },
    scope: {
        type: Sequelize.DataTypes.STRING
    }
})

module.exports = Journal