'use strict';
module.exports = (sequelize, DataTypes) => {
  const Complete = sequelize.define('Complete', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Complete.associate = function(models) {
    // associations can be defined here
    models.Complete.belongsTo(models.Map, {
      foreignKey: 'MapId'
    });
  };
  return Complete;
};