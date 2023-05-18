module.exports = (sequelize, DataTypes) => {
    const Todo = sequelize.define(
        "Todo",
        {
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

      Todo.associate = (db) => {
        Todo.belongsTo(db.User, {
            foreignKey: 'userId',
            onDelete: 'Restrict',
            onUpdate: 'Restrict'
          })
      }
      
      return Todo
}