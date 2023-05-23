'use strict';


const express = require('express');
const app = express();
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');
const router = require('./auth/router');
const basicAuth = require ('./auth/middleware/basic');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);



app.get('/welcome', basicAuth, (req, res) => {
  let { name } = req.query;
  res.status(200).send(`Welcome ${name}! this route is secured by Basic Auth!`);
});



app.use('*', notFound);
app.use(errorHandler);


const start = (port) => { app.listen(port, () => console.log('Server running on', port)); };


module.exports = { app, start };
