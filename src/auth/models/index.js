'use strict';


const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./user');


// db singleton
const sequelize = new Sequelize(process.env.DATABASE_URL);

const userModel = userSchema(sequelize, DataTypes);

module.exports = { sequelize, userModel };

