'use strict';


let { start } = require ('./src/server');
let { sequelizeDb } = require ('./src/auth/models/usersModel');


sequelizeDb.sync()
  .then(()=>{
    console.log ('Connected!');
    start();
  })
  .catch((err) => console.errer(err));
