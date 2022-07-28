'use strict';

module.exports = {
  up: async(queryInterface, Sequelize)=>{

    let questions = require("../modules/module1.json")

    for (let i = 0; i< questions.length; i++){
    let question = questions[i];

    await queryInterface.bulkInsert('question', [{
      id: question.id,
      text: question.text,
      questionImg: question.questionImg,
      options: [...question.options],
      correctAnswerId: question.correctAnswerId,
      explanation: question.explanationId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    }

    questions = require("../modules/module2.json")

    for (let i = 0; i< questions.length; i++){
    let question = questions[i];

    await queryInterface.bulkInsert('question', [{
      id: question.id,
      text: question.text,
      questionImg: question.questionImg,
      options: [...question.options],
      correctAnswerId: question.correctAnswerId,
      explanation: question.explanationId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    }

    questions = require("../modules/module3.json")

    for (let i = 0; i< questions.length; i++){
    let question = questions[i];

    await queryInterface.bulkInsert('question', [{
      id: question.id,
      text: question.text,
      questionImg: question.questionImg,
      options: [...question.options],
      correctAnswerId: question.correctAnswerId,
      explanation: question.explanationId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    }

    questions = require("../modules/module4.json")

    for (let i = 0; i< questions.length; i++){
    let question = questions[i];

    await queryInterface.bulkInsert('question', [{
      id: question.id,
      text: question.text,
      questionImg: question.questionImg,
      options: [...question.options],
      correctAnswerId: question.correctAnswerId,
      explanation: question.explanationId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    }

    questions = require("../modules/module5.json")

    for (let i = 0; i< questions.length; i++){
    let question = questions[i];

    await queryInterface.bulkInsert('question', [{
      id: question.id,
      text: question.text,
      questionImg: question.questionImg,
      options: [...question.options],
      correctAnswerId: question.correctAnswerId,
      explanation: question.explanationId,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
    }



  },

  down: async(queryInterface, Sequelize)=> {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('question', null, bulkDeleteOptions);
  }
};
