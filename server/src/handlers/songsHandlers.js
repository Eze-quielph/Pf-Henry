const { getAllSongs } = require("../controllers/songsControllers");

const getSongsHandler = async (req, res) => {
  res.send("estas en el handler de songs");
};

const postSongHandler = async (req, res) => {
  res.send("estas en el post de songs");
};

module.exports = {
    getSongsHandler,
    postSongHandler,
};