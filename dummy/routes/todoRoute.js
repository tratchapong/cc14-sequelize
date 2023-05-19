const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todoController')

router.get('/', todoController.getAllTodos)
router.get('/summary', todoController.summaryTodos)
router.get('/:id', todoController.getTodoById)
router.post('', ()=>{})

module.exports = router