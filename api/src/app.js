const express = require('express');
const  morgan = require('morgan');
const server = express();
const routes = require('./routes/index')


server.use(express.json());
server.use(morgan('dev'));

server.use('/', routes);
// server.get('/users',(req, res) => {
//     res.send('Hello World');
// });

module.exports = server;