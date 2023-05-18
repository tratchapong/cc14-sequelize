require('dotenv').config()
const {Op} = require('sequelize')
const {User, Todo, sequelize} = require('./models')

// sequelize.sync({force: true})

// CRUD
// Create

// User.create({name: 'Andy', password: '1234'}).then( rs => {
//     console.log(JSON.stringify(rs, null, 2))
// })
// ------------------------------
// Delete

// User.destroy({
//     where : { name : 'Andy' }
// }).then(rs=> console.log(JSON.stringify(rs, null, 4)))

// -----------------------------
// Bulk Create

// const mockUsers = [
//     { name: 'Andy', password: '1234'},
//     { name: 'Bobby', password: '1234'},
//     { name: 'Candy', password: '1234'},
//     { name: 'Danny', password: '1234'},
//     { name: 'Eddy', password: '1234'},
// ]

// User.bulkCreate(mockUsers).then(rs=> {
//     console.log(JSON.stringify(rs))
// })

// -----------------------------

// Update

// User.update({password: '4567'}, {
//     where: {name: 'Andy'}
// }).then(rs=> {
//     console.log(JSON.stringify(rs, null, 2))
// })

// -----------------------------
// Select / Find

// User.findOne({
//     where: { name: 'Andy'}
// }).then( rs => console.log(JSON.stringify(rs, null, 2)))

// Attribute
// User.findAll({
//     attributes: ['name', 'password', 'created_at'],
//     where: { name: 'Andy'}
// }).then( rs => console.log(rs))

// ------------------------
// เปลี่ยนชื่อ attribute
// User.findAll({
//     attributes: [['name', 'user_x'], 'password', 'created_at'],
//     where: { name: 'Andy'}
// }).then( rs => {
//     // console.log(JSON.stringify(rs, null, 2))
//     // console.log(rs[0].dataValues.user_x)
//     console.log(rs[0].get('user_x'))
// })

// exclude attribute
// User.findAll({
//     attributes: {exclude: 'password'}
// }).then( rs=> console.log(JSON.stringify(rs,null,2)))


// Aggregate function


// const {fn, col} = sequelize
// User.findAll({
//     attributes: [
//         [fn('COUNT', col('id')), 'countAll']
//     ],
//     where: {name: 'Andy'}
// }).then(rs => console.log(JSON.stringify(rs, null ,2)))


// use Op => Operator
// User.findAll({
//     where: {
//         name: {
//             [Op.like] : 'A%'
//         }
//     }
// }).then(rs => console.log(JSON.stringify(rs, null, 2)))

// Op.or

User.findAll({
    offset: 2,
    limit: 3,
    group: 'name',
    where : {
        [Op.or] : [
            { id: 12}, 
            { [Op.or]: 
                [{name: 'andy'},
                 {name: 'bobby'}
                ]}
        ]
    }
}).then(rs => console.log(JSON.stringify(rs, null, 2)))

// User.create({
//     name: 'G1234',
//     password: '2345'
// })
// .then(rs => console.log(JSON.stringify(rs, null, 2)))
// .catch(err => console.log(err.message))


