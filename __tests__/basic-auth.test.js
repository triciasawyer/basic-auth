'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');
const { userModel } = require('../src/auth/models');

//import function to be tested

// const basicAuth = require('../src/auth/middleware/basic');
const { sequelizeDb, UsersModel } = require('../src/auth/models/user');

let user = {
  username: 'tester',
  password: 'pass',
};


beforeAll (async () => {
  await sequelizeDb.sync();
  await UsersModel.create(user);
});


afterAll (async () => {
  await sequelizeDb.drop();
  // if tests aren't passing maybe its a multiple - async issue
  await sequelizeDb.close();
});


describe('Auth routes', (() => {
  test('allow for user signup', async () => {
    const response = await request.post('/signup').send ({
      username: '',
      password: '',
    });
  });


  test('allow for user signin', async () => {
    const response = await request.post('/signin').set('Authorization', 'Basic ');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('');
  });






  
}));
