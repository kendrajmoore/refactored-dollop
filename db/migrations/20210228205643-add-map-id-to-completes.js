
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Completes', // name of source model
      'MapId', // name of key we are adding
      { 
        type: Sequelize.INTEGER,
        references: { //Required field
          model: 'Completes',
          key: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Rsvps', 'EventId');
  }
};
