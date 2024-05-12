import { Sequelize, DataTypes } from 'sequelize';

const db = new Sequelize('codegig', 'postgres', '219219', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  }
});
