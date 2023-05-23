'use strict';


const express = require('express');
const app = express();
// const errorHandler = require('./error-handlers/500');
// const notFound = require('./error-handlers/404');
const authRouter = require('./auth/router');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(authRouter);


app.get('/', (req, res) => {
  res.status(200).send('You made it here!');
});


// app.use('*', notFound);
// app.use(errorHandler);


const start = (port) => { app.listen(port, () => console.log('Listening on port:', port)); };


module.exports = { app, start };
