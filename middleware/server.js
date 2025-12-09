const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const usersRouter = require('../routers/users.router');
server.use(bodyParser.json());
server.use('/users', usersRouter);

server.get('/', (req, res) => {
    res.send('<h1>Application is online</h1>');
});
module.exports = server;