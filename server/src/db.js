const usermodel = require("./models/user");
const cancionmodel = require("./models/cancion");

const { Sequelize } = require("sequelize");
require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

usermodel(sequelize);
cancionmodel(sequelize);

module.exports = {
  sequelize,
  ...sequelize.models,
};
