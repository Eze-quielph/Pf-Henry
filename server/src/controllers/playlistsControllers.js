const { Playlist } = require("../db");
const { Op } = require("sequelize");

const getPlaylists = async () => {
  const playlists = await Playlist.findAll();
  return playlists;
};

const getPlaylistById = async (id) => {
  const playlistById = await Playlist.findByPk(id);
  return playlistById;
};

const getPlaylistByName = async (name) => {
  const playlistByName = await Playlist.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  return playlistByName;
};

const postPlaylist = async (name, description) => {
  return await Playlist.create({ name, description });
};

const putPlaylist = async (name, description, id) => {
  const playlist = await Playlist.findByPk(id);
  
  Playlist.update({
    name: name,
    description: description,
  })
  
  return playlist;
};

const deletePlaylist = async (id) => {
  const playlistToDelete = await Playlist.findByPk(id)
  await playlistToDelete.destroy()
  return {
      message: "Playlist successfully deleted"
  };
};

module.exports = {
  getPlaylists,
  getPlaylistById,
  getPlaylistByName,
  postPlaylist,
  putPlaylist,
  deletePlaylist,
};