'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('question', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: Sequelize.STRING(2000),
      questionImg: Sequelize.STRING(2000),
      options: {
        type: Sequelize.ARRAY(Sequelize.STRING(2000)),
        default: [],
      },
      correctAnswerId: {
        type: Sequelize.INTEGER,
        isInt: true,
        max: 10,
        min: 0,
      },
      explanation: Sequelize.STRING(2000),
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('question');
  }
};