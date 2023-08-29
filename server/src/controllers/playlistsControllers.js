const { Playlist } = require("../db");
const { Op } = require("sequelize");

class PlaylistController {
  constructor(){}

  getPlaylists = async () => {
    const playlists = await Playlist.findAll();
    return playlists;
  };
  
  getPlaylistById = async (id) => {
    const playlistById = await Playlist.findByPk(id);
    return playlistById;
  };
  
  getPlaylistByName = async (name) => {
    const playlistByName = await Playlist.findAll({
      where: { name: { [Op.iLike]: `%${name}%` } },
    });
    return playlistByName;
  };
  
  postPlaylist = async (name, description) => {
    return await Playlist.create({ name, description });
  };
  
  putPlaylist = async (name, description, id) => {
    const playlist = await Playlist.findByPk(id);
    
    Playlist.update({
      name: name,
      description: description,
    })
    
    return playlist;
  };
  
  deletePlaylist = async (id) => {
    const playlistToDelete = await Playlist.findByPk(id)
    await playlistToDelete.destroy()
    return {
        message: "Playlist successfully deleted"
    };
  };
}

module.exports = PlaylistController
