const Sequelize = require('sequelize')

module.exports = {
    config : {
        username: null,
        password: null, // Для sqlite пароль не обязателен
        database: 'db', // Имя базы данных
        host: 'localhost', // Адрес субд, для sqlite всегда локалхост
        dialect: 'sqlite', // Говорим, какую СУБД будем юзать
        dialectOptions: {
            multipleStatements: true
        },
        logging: console.log, // Включаем логи запросов, нужно передать именно функцию, либо false
        storage: './db.db', // Путь к файлу БД
        operatorsAliases: Sequelize.Op // Передаём алиасы параметров (дальше покажу нафига)
    }, 
    jwt: 'dev-jwt'
}

