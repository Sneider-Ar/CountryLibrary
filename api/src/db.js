requere("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CountryModels = require("./models/Country");
const ActivityModels = require("./models/Activity");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/country`,
  { logging: false, native: false }
);

CountryModels(sequelize);
ActivityModels(sequelize);

const { Country, Actvity } = sequelize.models;

Country.belongsToMany(Actvity, { through: "country_activity" });
Actvity.belongsToMany(Country, { through: "country_activity" });

module.exports = {
  Country,
  Actvity,
  conn: sequelize,
};
