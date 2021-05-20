'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.addColumn('Subs', 'MapId', Sequelize.INTEGER).then(() => {
      return queryInterface.addConstraint('Subs', ['MapId'], {
        type: 'foreign key',
        name: 'map_subs',
        references: { 
          table: 'Maps',
          field: 'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Subs', 'MapId');  
  }
};
