const { Sequelize, DataTypes, fn, col} = require('sequelize')

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'root',
    password: 'Codecamp2021',
    database: 'cc14_shop',
    dialect: 'mysql'
})

// sequelize.authenticate().then(console.log('DB Connect OK'))

// sequelize.query('Select * from products where id=1').then(([rs]) => {
//     console.log(rs)
// })

sequelize.define('Product',{
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps : false
})

const Customer = sequelize.define('Customer', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull:false
    },
    lastName: {
        type: DataTypes.STRING,
        defaultValue: "No specify"
    }
},{
    timestamps: true,
    // freezeTableName: true,
    // tableName: 'people'
    underscored: true
})

// Customer.sync({force: true})

// sequelize.models.Customer.sync({force: true})

// Customer.drop().then(console.log('table deleted'))

// console.log(sequelize.models)

    // sequelize.models.Product.findAll().then(rs => {
    //     console.log(JSON.parse(JSON.stringify(rs)))
    //     console.log(rs[1].name)
    // })

// sequelize.models.Product.findByPk(4).then(rs => {
//     console.log(JSON.parse(JSON.stringify(rs)))
// })

// const Product = sequelize.models.Product
// Product.findAll({
//     attributes: [
//         [fn('sum', col('price')) , 'Total']
//     ]
// }).then(rs => console.log(JSON.stringify(rs)))