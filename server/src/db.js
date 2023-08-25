//Setting Sequelize
const { Sequelize } = require("sequelize");

require("dotenv").config();
const { DATABASE_URL } = process.env;

const sequelize = new Sequelize(
  DATABASE_URL,
  {
    logging: false,
    native: false,
  }
);

//Setting Models
const fs = require('fs');
const path = require('path');

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });


modelDefiners.forEach(model => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const { User, Song, Playlist } = sequelize.models;

// Relations
User.belongsToMany(Song, { through: "user_song" });
Song.belongsToMany(Playlist, { through: "song_playlist" });
Playlist.belongsToMany(User, { through: "playlist_user" });
Song.belongsTo(User, { through: "user_song" });
Playlist.belongsToMany(Song, { through: "song_playlist" });

module.exports = {
  sequelize,
  ...sequelize.models,
};
