const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(process.env.DB_CONNECT);

// sequelize.authenticate().then(console.log('DB Connected')).catch(err => console.log(err.message))

const User = sequelize.define(
  "User",
  {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: true,
        len: [2, 15],
      },
      get() {
        return this.getDataValue('name').toUpperCase();
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    underscored: true,
  }
);

const Todo = sequelize.define(
  "Todo",
  {
    // todoId: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     allowNull: false,
    //     autoIncrement: true,
    // },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nextSevenDay: {
      type: DataTypes.VIRTUAL,
      get() {
        let sevenDay = new Date(this.dueDate);
        sevenDay.setDate(sevenDay.getDate()+7);
        return sevenDay
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,

      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

User.hasMany(Todo, {
  foreignKey: "userId",
  onDelete: 'Restrict',
  onUpdate: 'Restrict'
});

Todo.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'Restrict',
  onUpdate: 'Restrict'
});

// sequelize.sync({alter: true})

module.exports = { User, Todo, sequelize };
