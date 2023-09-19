'use strict';

const server = require('./lib/server.js');
const PORT = process.env.PORT || 3001;

// start the server running with the given port number
server.start(PORT);