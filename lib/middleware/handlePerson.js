'use strict';

const handleSum = (req, res, next) => {
  res.status(200).send({ name: req.query.name });
};

module.exports = handleSum;