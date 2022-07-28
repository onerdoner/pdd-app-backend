'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Question);
    }
  }

  Question.init({
    text: {
      type: DataTypes.STRING,
      length: 1000
    },
    questionImg: {
      type: DataTypes.STRING,
      length: 1000
    },
    options: {
      type: DataTypes.ARRAY({type: DataTypes.STRING, length: 1000}),
      default: [],
    },
    correctAnswerId: {
      type: DataTypes.INTEGER,
      isInt: true,
      max: 10,
      min: 0,
    },
    explanation: {type: DataTypes.STRING,length: 1000},
    createdAt: {
      type: DataTypes.DATE,
      field: 'createdAt',
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updatedAt',
    },
  }, {
    sequelize,
    modelName: 'Question',
    // tableName: 'question'
  });

  return Question; 
};