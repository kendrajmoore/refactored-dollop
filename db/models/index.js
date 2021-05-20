const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}
const production = "production"


if (process.env.NODE_ENV == production) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect:  'postgres',
    protocol: 'postgres',
    port:     5432,
    host:     process.env.HOST,
    logging:  true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: true
      }
    }
  })
} else {
  sequelize = new Sequelize('moodefy-site', null, null, {
    host: 'localhost',
    dialect: 'postgres'
  })
}

fs
  .readdirSync(__dirname)
  .filter((file) =>
    file !== 'index.js'
  )
  .forEach((file) => {   
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  })

  sequelize.authenticate()
 .then(() => {
   console.log('Connection has been established successfully.');
 })
 .catch(err => {
   console.error('Unable to connect to the database:', err);
 });

 Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});



db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
