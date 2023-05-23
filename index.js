'use strict';


require('dotenv').config();


const { sequelizeDb } = require('./src/auth/models/usersModel');
const { app } = require('./src/server');
const PORT = process.env.PORT || 3005;



sequelizeDb.sync()
  .then(() => {
    app.listen(PORT, () => console.log('server is up!'));
  }).catch(err => {
    console.error('Could not start server', err.message);
  });

