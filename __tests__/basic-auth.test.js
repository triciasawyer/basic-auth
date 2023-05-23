'use strict';

// const bcrypt = require('bcrypt');
// const base64 = require('base-64');
const { userModel } = require('../src/auth/models');
const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const { basicAuth } = require('../src/auth/middleware/basic');
const { sequelize } = require('../src/auth/models/user');


let user = {
  username: 'Testing-2',
  password: 'passyword',
};


beforeAll (async () => {
  await sequelize.sync();
});


afterAll (async () => {
  await sequelize.drop();
});


describe('Auth routes', (() => {
  test('allow for user signup', async () => {
    let response = await request.post('/signup').send(user);

    expect(response.status).toEqual(201);
    expect(response.body.username).toEqual('Testing-2');
    // expect(response.body.password).not.toEqual('passyword');
  });


  test('allow for user signin', async () => {
    let response = await request.post('/signin').set('Authorization', 'Basic dGVzdDpwYXNz');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('');
  });

  test('/signin fails', async () => {
    let req = { headers: { authorization: 'Basic bad' } };
    let res = { status: null };
    let next = jest.fn();
    await basicAuth(req, res, next);

    expect(next).toHaveBeenCalledWith('Invalid Login');
  });







}));
