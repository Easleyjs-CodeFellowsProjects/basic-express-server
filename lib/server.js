'use strict';

const express = require('express');
const cors = require('cors');
const app = express();

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
const handleSum = require('./middleware/handleSum');
const handleError = require('./error-handlers/serverError');

app.use(cors());

app.use(logger); // logger middleware
app.use(validator); //validator middleware
app.get('/sum', handleSum); // handle sum method
app.use(handleError); // error handler

app.use('/*', (req, res) => {
  res.send('Unknown Route');
}); // if request doesn't match any other route

module.exports = {
  app,
  start: (port) => {
    app.listen(port, () => {
      console.log('Server is running on PORT :', port);
    });
  }
};