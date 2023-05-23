'use strict';


// Signup Route -- create a new user
const express = require('express');
const router = express.Router();
const bcrypt = require ('bcrypt');
const { Users } = require ('./models/usersModel');
const { basicAuth } = require('./middleware/basic');


router.post('/signup', async(req, res)=>{
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await Users.create(req.body);
    res.status(201).json(record);
  } catch (err) { res.status(403).send('Error Creating User'); }
});


// Signin Route -- login with username and password
router.post('/signin', basicAuth, async (req, res) => {
  res.status(200).send(req.user);
});


module.exports = router;
