'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const handlePerson = require('./middleware/handlePerson');
const handleError = require('./error-handlers/serverError');
const error_404 = require('./error-handlers/error_404');

app.use(cors());

app.use(logger); // logger middleware
app.use(validator); //validator middleware
app.get('/person', handlePerson); // take a name, return json

app.use(handleError); // error handler

app.use('/*', error_404); // if request doesn't match any other route

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running on PORT :', port);
    });
  }
};