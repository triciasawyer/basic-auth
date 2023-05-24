'use strict';


const { app } = require('../src/server');
const supertest = require('supertest');
const request = supertest(app);
const basicAuth = require('../src/auth/middleware/basic');
const { sequelize } = require('../src/auth/models/index');
const { response } = require('express');


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
  });


  test('allow for user signin', async () => {
    let response = await request.post('/signin').set('Authorization', 'Basic VGVzdGluZy0yOnBhc3N5d29yZA');

    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('Testing-2');
  });


  test('/signin fails', async () => {
    let req = { headers: { authorization: 'Basic bad' } };
    let res = { status: jest.fn() };
    let next = jest.fn();
    await basicAuth(req, res, next);

    expect(next).toHaveBeenCalledWith('Invalid Login');
  });







}));
