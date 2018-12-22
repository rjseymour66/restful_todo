'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Todo.associate = function(models) {
    // associations can be defined here
    Todo.hasMany(models.TodoITem, {
      foreignKey: 'todoId',
    })
  };
  return Todo;
};