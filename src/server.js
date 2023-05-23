'use strict';


require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3005;




function start() { app.listen(PORT, () => console.log(`Listening on port ${PORT}`)); }


module.exports = { app, start };