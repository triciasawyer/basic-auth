'use strict';


const express = require('express');
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const router = express.Router();
const { userModel } = require ('./models');
const basicAuth = require('./middleware/basic');


router.get('/', (req, res) => {
  res.status(200).send('Auth route running');
});


// Signup Route -- create a new user
router.post('/signup', async(req, res)=>{
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await userModel.create(req.body);
    res.status(201).json(record);
  } catch (err) {
    res.status(403).send('Error Creating User');
  }
});


// Signin Route -- login with username and password
router.post('/signin', basicAuth, async (req, res, next) => {
  try {
    res.status(200).json(req.user);
  } catch (err) { next('Invald Login. message: ', err.message); }


});



module.exports = router;
