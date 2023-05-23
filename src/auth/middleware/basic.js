'use strict';


const base64 = require('base-64');
const bcrypt = require('bcrypt');
const { UsersModel } = require('../models/usersModel');

async function basicAuth(req, res, next) {
  let { authorization } = req.headers;
  console.log('authorization::::', authorization);

  if (!authorization) {
    res.status(401).send('Not Authorized');
  } else {
    let authString = authorization.split(' ')[1];
    console.log('authStr:', authString); // dGVzdDpwYXNz

    let decodedAuthString = base64.decode(authString);
    console.log('decodedAuthString:', decodedAuthString);

    let [ username, password ] = decodedAuthString.split(':');
    console.log('username:', username);
    console.log('password:', password);

    // find the user in the database
    let user = await UsersModel.findOne({where: { username }});
    console.log('user:', user);
    // IF the user exists (in database after a signup request)...
    if(user){
      // compare  password from database to the signin password
      // note: password could also be sent from a logged in client
      let validUser = await bcrypt.compare(password, user.password);
      console.log('validUser', validUser);
      // if valid user DOES exist...
      if(validUser){
        // attach user to the request object
        req.user = user;
        // basicAuth middleware is done, pass request to next middleware
        next();
        // if valid user DOES NOt exist...
      } else {
        // send a "Not Authorized" error to express middleware
        next('Not Authorized');
      }
    }

  }
}

module.exports = basicAuth;
