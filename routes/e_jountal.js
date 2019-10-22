const express = require('express')
const controller = require('../controllers/e_jounral')
const router = express.Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.get('/:dataId', controller.getByDataId)
router.get('/:subjectId', controller.getBySubjectId)
router.get('/:userId', controller.getByUserId)
router.get('/:studentId', controller.getByStudentId)
router.delete('/:id', controller.remove)
router.post('/', controller.create)
router.patch('/:id', controller.update)
module.exports = router