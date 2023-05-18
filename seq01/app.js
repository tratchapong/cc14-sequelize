require("dotenv").config();
const { User, Todo, sequelize } = require("./models");

// sequelize
//   .sync({ force: true })
//   .then(() => {
//     return User.bulkCreate([
//       { name: "Andy", password: "1234" },
//       { name: "Bobby", password: "1234" },
//       { name: "Candy", password: "1234" },
//       { name: "Danny", password: "1234" },
//       { name: "Eddy", password: "1234" },
//     ]);
//   })
//   .then(() => {
//     return Todo.bulkCreate([
//       { title: "Learn HTML", dueDate: "2023-05-19", userId: 1 },
//       { title: "Learn CSS", dueDate: new Date("2023-05-21"), userId: 1 },
//       { title: "Learn Javascript", dueDate: new Date("2023-05-25"), userId: 2 },
//       { title: "Practice Git", dueDate: new Date("2023-05-30"), userId: 3 },
//       {
//         title: "Read mySQL Manual",
//         dueDate: new Date("2023-06-02"),
//         userId: 3,
//       },
//       { title: "Review Docker", dueDate: "2023-06-10", userId: 4 },
//     ]);
//   })
//   .catch((err) => console.log(err.message));


// ----------------------

// User.findAll({
//     where: { name : 'andy'},
//     include : Todo
// }).then( rs => {
//     console.log(JSON.stringify(rs, null, 2))
//     console.log(rs[0].Todos[1].title)
// })

// Todo.findAll({
//     where : { id: 1},
//     include: User
// }).then(rs => {
//     console.log(JSON.stringify(rs, null, 2))
// })




// User.hasMany(Todo,{
// foreignKey: 'userId',
// })

// Todo.belongsTo(User,{
// foreignKey: 'userId'
// })

// sequelize.sync({force: true})

// User.findAll({
// include : Todo,
// where: { id : 2}
// }).then(rs=> console.log(JSON.stringify(rs,null,2)))

// Todo.findAll({
//     include: User
// }).then(rs=> console.log(JSON.stringify(rs,null,2)))

// User.findAll({
//     where : { id : 3},
//     attributes: ['id', 'name'],
//     include : {
//         model : Todo,
//         attributes: ['title', 'status'],
//     }
// }).then(rs=> {
//     console.log(JSON.stringify(rs,null,2))
//     // ["Practice Git", "Read mySQL Manual"]  
//     // console.log(rs[0].Todos[0].title) 
//     // console.log(JSON.stringify(rs[0].Todos, null, 2))
//     // let output = rs[0].Todos.map(el => el.title)
//     // console.log(output)
// })

// User.findByPk(2).then(rs =>{
//  console.log(JSON.stringify(rs.name, null, 2))
//  console.log(rs.getDataValue('name'))
// })

// Todo.findByPk(2).then( rs => {
//     console.log(JSON.stringify(rs, null ,2))
// })

Todo.findAll({
    where: { id: 1},
    include: {
        model: User,
    }
}).then(rs => console.log(JSON.stringify(rs, null, 2)))

User.findAll({
    where: {id: 1},
    include: {
        model: Todo,
    }
}).then(rs => console.log(JSON.stringify(rs, null, 2)))