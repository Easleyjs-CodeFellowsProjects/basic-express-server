'use strict';

const error_404 = (err, req, res, next) => {
  res.status(404).send('PAGE NOT FOUND');
};

module.exports = error_404;