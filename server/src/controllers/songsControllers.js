const { Song } = require("../db");
const { Op } = require("sequelize");

const getSongs = async () => {
  const songs = await Song.findAll();
  return songs;
};

const getSongById = async (id) => {
  const songById = await Song.findByPk(id);
  return songById;
};

const getSongByName = async (name) => {
  const songByName = await Song.findAll({
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  return songByName;
};

const getSongByArtist = async (artist) => {
  const songByArtist = await Song.findAll({
    where: { artist: { [Op.iLike]: `%${artist}%` } },
  });
  return songByArtist;
};

const getSongByGenre = async (genre) => {
  const songByGenre = await Song.findAll({
    where: { genre: { [Op.iLike]: `%${genre}%` } },
  });
  return songByGenre;
};

const postSong = async (name, song, description, artist, genre, image) => {
  return await Song.create({ name, song, description, artist, genre, image });
};

const putSong = async (name, song, description, artist, genre, image, id) => {
  const songToUpdate = await Song.findByPk(id);

  Song.update({
    name: name,
    song: song,
    description: description,
    artist: artist,
    genre: genre,
    image: image,
  });

  return songToUpdate;
};

const deleteSong = async (id) => {
  const songToDelete = await Song.findByPk(id);
  await songToDelete.destroy();
  return {
    message: "Song successfully deleted",
  };
};

module.exports = {
  getSongs,
  getSongById,
  getSongByName,
  getSongByArtist,
  getSongByGenre,
  postSong,
  putSong,
  deleteSong,
};
