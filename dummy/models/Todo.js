const {Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize()

module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        title : {
            type : DataTypes.STRING,
            allowNull: false
        }
    }, {
        underscored: true,
    })

    Todo.associate = (db) => {
        Todo.belongsTo(db.User, {
            foreignKey : 'userId',
            onDelete: 'Restrict',
            onUpdate: 'Restrict'
        })
    }

    return Todo
}