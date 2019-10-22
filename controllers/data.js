const db = require('../db/database')
const Data = require('../models/Data')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
    try {
        const dates = await Data.findAll()
        res.status(200).json({
            dates
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async (req, res) => {
    try {
        const date = await Data.findOne({ where: { id: req.params.id } })
        res.status(200).json({
            date
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Data.destroy({ where: { id: req.params.id } })
        res.status(200).json({
            message: 'Дата была удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async (req, res) => {
    try {
        const data = {
            time: req.body.time,
            date: req.body.date
        }
        await Data.create(data)
            .then(result => res.status(201).json(result))
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async (req, res) => {
    try {
        await Data.update({date: req.body.time, time: req.body.time}, {where: { id: req.params.id }})
            .then(result => res.status(200).json(result))
        await res. Data.findOne({ where: { id: req.params.id } })
    } catch (e) {
        errorHandler(res, e)
    }
}