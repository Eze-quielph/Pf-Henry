const {
  getSongs,
  getSongById,
  getSongByName,
  getSongByArtist,
  getSongByGenre,
  postSong,
  putSong,
  deleteSong,
} = require("../controllers/songsControllers");

class SongHandler {
  constructor() {}

  getSongs = async (req, res) => {
    try {
      const allSongs = await getSongs();
      if (!allSongs.length) throw new Error("Songs aren't available");
      res.status(200).json(allSongs);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getSongById = async (req, res) => {
    const { id } = req.params;
    try {
      const song = await getSongById(id);
      if (!song) throw new Error("Song unavailable");
      res.status(200).json(song);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getSongByName = async (req, res) => {
    const { name } = req.query;
    try {
      if (!name) throw new Error("Name not entered");
      const searchByName = await getSongByName(name);
      if (!searchByName.length) throw new Error("Song not found");
      res.status(200).json(searchByName);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getSongsByArtist = async (req, res) => {
    const { artist } = req.query;
    try {
      if (!artist) throw new Error("Artist not entered");
      const searchByArtist = await getSongByArtist(artist);
      if (!searchByArtist.length) throw new Error("Artist not found");
      res.status(200).json(searchByArtist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getSongsByGenre = async (req, res) => {
    const { genre } = req.query;
    try {
      if (!genre) throw new Error("Genre not entered");
      const searchByGenre = await getSongByGenre(genre);
      if (!searchByGenre.length) throw new Error("Genre not found");
      res.status(200).json(searchByGenre);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  postSong = async (req, res) => {
    const { name, song, description, artist, genre, image } = req.body;
    try {
      const newSong = await postSong(
        name,
        song,
        description,
        artist,
        genre,
        image
      );
      if (!newSong) throw new Error("Song couldn't be created");
      res.status(201).json(newSong);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  putSong = async (req, res) => {
    const { id } = req.params;
    const { name, song, description, artist, genre, image } = req.body;
    try {
      const editSong = await putSong(
        name,
        song,
        description,
        artist,
        genre,
        image,
        id
      );
      if (!editSong) throw new Error("Song couldn't be modified");
      res.status(200).json(editSong);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  deleteSong = async (req, res) => {
    const { id } = req.params;
    try {
      const deleteSong = await deleteSong(id);
      if (!deleteSong) throw new Error("Song couldn't be deleted");
      res.status(201).json(deleteSong);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = SongHandler;
