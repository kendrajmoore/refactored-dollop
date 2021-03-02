'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sub = sequelize.define('Sub', {
    username: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  Sub.associate = function(models) {
    // associations can be defined here
    Sub.belongsTo(models.Map);
  };
  return Sub;
};