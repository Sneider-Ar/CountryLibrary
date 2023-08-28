const { Router } = require('express');
const countries = require('./countrysRoutes');

const routes = Router();

routes.use('/countries', countries);

module.exports = routes;