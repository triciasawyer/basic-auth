'use strict';

require('dotenv').config();

const { sequelize } = require('./src/auth/models');
const { start } = require('./src/server');
const PORT = process.env.PORT || 3005;


sequelize.sync()
  .then(() => {
    start(PORT);
  }).catch(err => {
    console.error('Could not start server', err.message);
  });

