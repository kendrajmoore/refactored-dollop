// 'use strict';

// module.exports = {
//   up: (queryInterface, Sequelize) => {

//     return queryInterface.addColumn('Completes', 'MapId', Sequelize.INTEGER).then(() => {
//       return queryInterface.addConstraint('Completes', ['MapId'], {
//         type: 'foreign key',
//         name: 'map_completes',
//         references: { //Required field
//           table: 'Map',
//           field: 'id'
//         },
//         onDelete: 'CASCADE',
//         onUpdate: 'CASCADE'
//       });
//     });
//   },

//   down: (queryInterface, Sequelize) => {
//     return queryInterface.removeColumn('Completes', 'MapId');  
//   }
// };