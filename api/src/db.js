requere('dotenv').config();
const { Sequelize} = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/country`,
    {logging: false, native: false}
); 