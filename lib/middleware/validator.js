'use strict';

const validator = (req, res, next) => {
  let name = req.query.name;
  if (!name) {
    next({code: 500, message: 'NO NAME GIVEN' }); // any error that you want to throw is passed as an argument into the next function.
  } else {
    next();
  }
}

module.exports = validator;