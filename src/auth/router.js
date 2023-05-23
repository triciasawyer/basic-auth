'use strict';


const express = require('express');
const { basicAuth } = require('./middleware/basic');
const { Users } = require('./models/usersModel');
const { app } = require('../server');


// Signup Route -- create a new user
app.post('/signup', async (req, res) => {
  try {
    const record = await Users.create(req.body);
    res.status(201).send(record);
  } catch (err) { res.status(403).send('Error Creating User'); }
});


// Signin Route -- login with username and password
app.post('/signin', basicAuth, async (req, res) => {
  res.status(200).send(req.user);
});

module.exports = app;
