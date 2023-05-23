'use strict';


const express = require('express');
const app = express();
const cors = require('cors');
const errorHandler = require('./error-handlers/500');
const notFound = require('./error-handlers/404');


app.use(cors());
app.use(express.json());


app.use('*', notFound);
app.use(errorHandler);


const start = (port) => { app.listen(port, () => console.log('Server running on', port)); };


module.exports = { app, start };
