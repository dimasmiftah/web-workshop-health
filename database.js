const config = require('./config');
const { Sequelize } = require('sequelize');

const dbConfig = config.database;

const db = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',
  }
);

module.exports = db;
