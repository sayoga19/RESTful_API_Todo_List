'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsTo(models.User, {foreignKey: 'user_id'});
      Task.hasMany(models.Comment, {foreignKey: 'task_id'});
      // define association here
    }
  }
  Task.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: {
      type: DataTypes.ENUM,
      values: ['todo', 'in-progress', 'done']
    },
    due_date: DataTypes.DATE,
    urgency: {
      type: DataTypes.ENUM,
      values: ['low', 'medium', 'high']
    },
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};