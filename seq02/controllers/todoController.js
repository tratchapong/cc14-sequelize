const {Todo, User} = require('../models')

exports.getAllTodos = (req, res, next) => {
    Todo.findAll().then(rs => {
        res.json(rs)
    }).catch(next)
}

// ต้องการเฉพาะ title, due_date, status
exports.getTodoById = (req, res, next) => {
    const {id} = req.params
    Todo.findAll({
        attributes: ['title', 'dueDate', 'status'],
        where : {id : id}
    }).then( rs => {
        res.json(rs)
    }).catch(next)
}

// เพิ่มข้อมูลโดยส่งมาทาง req.body 

// {
//     "title": "Learn HTML",
//     "dueDate": "2023-05-19",
//     "userId": 2
// }

exports.createTodo = (req, res, next) => {
    // validation
    Todo.create(req.body).then(rs=> {
        res.json(rs)
    }).catch(next)

}

exports.deleteTodo = (req, res, next) => {
    const {id} = req.params
    Todo.destroy({
        where : {id : id}
    }).then(rs=> {
        if (rs===0) {
            throw new Error('Cannot Delete!!')
        }
        res.json(rs)
    }).catch(next)
}

// {
//     "title": "Learn HTML",
//     "dueDate": "2023-05-19",
//     "userId": 2
// }

exports.updateTodo = (req, res, next) => {
    const {id} = req.params
    Todo.update(req.body, {
        where : { id:id}
    }).then(rs => {
        res.json(rs)
    }).catch(next)
}

// แสดง todolist จากชื่อ user
//   /user?name=Andy

exports.getTodoByUser = (req, res, next) => {
    const {name} = req.query
}

