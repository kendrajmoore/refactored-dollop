'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Maps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creator: {
        type: Sequelize.STRING
      },
      creatorUrl: {
        type: Sequelize.STRING
      },
      mission: {
        type: Sequelize.TEXT
      },
      goalOne: {
        type: Sequelize.STRING
      },
      goalTwo: {
        type: Sequelize.STRING
      },
      goalThree: {
        type: Sequelize.STRING
      },
      goalFour: {
        type: Sequelize.STRING
      },
      goalFive: {
        type: Sequelize.STRING
      },
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Maps');
  }
};