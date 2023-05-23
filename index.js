'use strict';


require('dotenv').config();


const { sequelizeDb } = require('./src/auth/models/usersModel');
const { start, app } = require('./src/server');
const PORT = process.env.PORT || 3005;


// make sure our tables are created, start up the HTTP server.
// sequelizeDb.sync()
//   .then(() => {
//     console.log('Connected!');
//     start(PORT);
//   })
//   .catch(err => console.error(err));


sequelizeDb.sync()
  .then(() => {
    app.listen(3000, () => console.log('server up'));
  }).catch(e => {
    console.error('Could not start server', e.message);
  });

