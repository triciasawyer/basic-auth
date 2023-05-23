'use strict';


const express = require('express');
const bcrypt = require('bcrypt');
const usersModel = require('./models/usersModel');






router.post('/signup', async (req, res, next) => {
    try {
        let { username, password } = req.body;
        let encryptedPassword = await bcrypt.hash(password, 5);

        let user = await usersModel.create({
            username,
            password: encryptedPassword,
        });
        res.status(200).send(user);
    } catch (err) {
        next('signup error', err);
    }
});
