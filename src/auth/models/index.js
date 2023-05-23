'use strict';


require('dotenv').config();
const { Sequelize } = require('sequelize');


const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite::memory:' : process.env.DATABASE_URL;


// db singleton
const sequelizeDb = new Sequelize(DATABASE_URL);


module.exports = { sequelizeDb };

