const { getAllPlaylists } = require("../controllers/playlistsControllers");

const getPlaylistsHandler = async (req, res) => {
  res.send("estas en el handler de playlists");
};

const postPlaylistHandler = async (req, res) => {
  res.send("estas en el post de playlists");
};


module.exports = {
    getPlaylistsHandler,
    postPlaylistHandler,
};