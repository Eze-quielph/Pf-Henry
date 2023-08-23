const usermodel = require("./models/user");
const songmodel = require("./models/song");
const playlistmodel = require("./models/playlist");

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
songmodel(sequelize);
playlistmodel(sequelize);

const { user } = sequelize.models;

module.exports = {
  sequelize,
  ...sequelize.models,
};
