const {Todo} = require('../models')

exports.getAllTodos = (req, res, next) => {

    res.send('getAllTodos..')
}

exports.getTodoById = (req, res, next) => {

    res.send('getTodoById..')
}

exports.summaryTodos = async (req, res, next) => {
    const rs = await Todo.findAll()

    res.send('SummaryTodo..')
}