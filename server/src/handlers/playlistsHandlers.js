const { getAllPlaylists } = require("../controllers/playlistsControllers");

class PlaylistHandle {

  constructor(){};

  getPlaylists = async (req, res) => {
    res.status(200).send("estas en el handler de playlists");
  };
  
  postPlaylist = async (req, res) => {
    res.status(200).send("estas en el post de playlists");
  };

  updatePlaylist = async(req, res)=>{
    res.status(200).send("estas en el put de playlists");
  }
}

module.exports = PlaylistHandle