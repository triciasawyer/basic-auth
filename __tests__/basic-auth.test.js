'use strict';

// const basicAuth = require('../src/auth/middleware/basic');
const { sequelizeDb, UsersModel } = require('../src/auth/models/usersModel');

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
