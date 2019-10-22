const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const keys = require('../config/keys')
const errorHandler = require('../utils/errorHandler')

module.exports.login = async (req, res) => {
    const candidate = await User.findOne({ where: {email: req.body.email}})

    if(candidate) {
        //Check password
        const passwordResult =bcrypt.compareSync(req.body.password, candidate.password)
        if(passwordResult) {
            //Generate token
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate.id
            }, keys.jwt, {expiresIn: 60 * 60})

            res.status(200).json({
                token: `Bearer ${token}`
            })
        } else {
            //Wrong password
            res.status(401).json({
                message: 'Неправильный пароль'
            })
        }
    } else {
        //User not found
        res.status(404).json({
            message: 'Пользователь с таким email не найден'
        })
    }
}

module.exports.register = async (req, res) => {

    const candidate = await User.findOne({ where: {email: req.body.email}})

    if(candidate){
        //Email already used
        res.status(409).json({
            message: 'Почтовый адрес занят, попробуйте использовать другой.'
        })
    } else {
        //Create user
        const salt = bcrypt.genSaltSync(10)
        const password = req.body.password
        const user = {
            name: req.body.name,
            surname: req.body.surname,
            patronymic: req.body.patronymic,
            email: req.body.email,
            password: bcrypt.hashSync(password, salt)
        }

        try{
            await User.create(user)
                .then(result => res.status(201).json(result))
        } catch(e) {
            errorHandler(res, e)
        }
    }
    
}