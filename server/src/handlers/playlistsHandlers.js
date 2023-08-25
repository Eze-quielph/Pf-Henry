const PlaylistController = require("../controllers/playlistsControllers");

const playlistController = new PlaylistController();

class PlaylistHandler {
  constructor() {}

  getPlaylists = async (req, res) => {
    try {
      const allPlaylists = await playlistController.getPlaylists();
      if (!allPlaylists.length) throw new Error("Playlists aren't available");
      res.status(200).json(allPlaylists);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getPlaylistById = async (req, res) => {
    const { id } = req.params;
    try {
      const playlist = await playlistController.getPlaylistById(id);
      if (!playlist) throw new Error("Playlist unavailable");
      res.status(200).json(playlist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  getPlaylistByName = async (req, res) => {
    const { name } = req.query;
    try {
      if (!name) throw new Error("Name not entered");
      const searchByName = await playlistController.getPlaylistByName(name);
      if (!searchByName.length) throw new Error("Playlist not found");
      res.status(200).json(searchByName);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  postPlaylist = async (req, res) => {
    const { name, description } = req.body;
    try {
      const newPlaylist = await playlistController.postPlaylist(name, description);
      if (!newPlaylist) throw new Error("Playlist couldn't be created");
      res.status(201).json(newPlaylist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  putPlaylist = async (req, res) => {
    const { id } = req.params;
    const { name, description } = req.body;
    try {
      const editedPlaylist = await playlistController.putPlaylist(name, description, id);
      if (!editedPlaylist) throw new Error("Playlist couldn't be modified");
      res.status(200).json(editedPlaylist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  deletePlaylist = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedPlaylist = await playlistController.deletePlaylist(id);
      if (!deletedPlaylist) throw new Error("Playlist couldn't be deleted");
      res.status(201).json(deletedPlaylist);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
}

module.exports = PlaylistHandler;
