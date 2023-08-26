const express = require('express');
const  morgan = require('morgan');
const server = express();


server.use(express.json());
server.use(morgan('dev'));

server.get('/users',(req, res) => {
    res.send('Hello World');
});

module.exports = server;