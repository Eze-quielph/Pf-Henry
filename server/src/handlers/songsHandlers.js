const { getAllSongs } = require("../controllers/songsControllers");


class SongHandle {
  constructor() { };

  getSongs = async (req, res) => {
    res.status(200).send("estas en el handler de songs");
  };

  postSong = async (req, res) => {
    res.status(200).send("estas en el post de songs");
  };

  deleteSong = async(req, res) =>{ 
    res.status(200).send('todo ok')
  }
}

module.exports = SongHandle
