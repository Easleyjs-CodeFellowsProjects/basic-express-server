'use strict';

const serverError = (err, req, res, next) => {
  //console.log("AN ERROR OCCURRED!", err);
  if (req.path == '/person') {
    res.status(err.code).json({ message: err.message });
  } else {
    next();
  }
};

module.exports = serverError;