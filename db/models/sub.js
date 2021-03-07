'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sub = sequelize.define('Sub', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Subs',
  });
  Sub.associate = function(models) {
    // associations can be defined here
    models.Sub.belongsTo(models.Map, {
      foreignKey: 'MapId'
    });
  };
  return Sub;
};