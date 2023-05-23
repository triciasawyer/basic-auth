'use strict';

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

  });


  test('allow for user signin', async () => {
    const response = await request.post('singin').set('Authorization', 'Basic ');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('');
  });


}));
