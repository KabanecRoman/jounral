const db = require('../db/database')
const Group = require('../models/Group')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async (req, res) => {
    try {
        const groups = await Group.findAll()
        res.status(200).json({
            groups
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async (req, res) => {
    try {
        const group = await Group.findOne({ where: { id: req.params.id } })
        res.status(200).json({
            group
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async (req, res) => {
    try {
        await Group.destroy({ where: { id: req.params.id } })
        res.status(200).json({
            message: 'Группа была удалена'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async (req, res) => {
    try {
        const group = {
            name: req.body.name
        }
        await Group.create(group)
            .then(result => res.status(201).json(result))
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = (req, res) => {

}