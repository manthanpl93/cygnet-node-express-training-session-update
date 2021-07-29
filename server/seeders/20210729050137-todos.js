'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Todos', [{
      "text": "Assignment 2",
      "completed": true,
      createdAt: new Date(),
      updatedAt: new Date()

    }, {
      "text": "Assignment 3",
      "completed": true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Todos', null, {})
  }
};
