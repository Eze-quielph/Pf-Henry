const songsRouter = require("express").Router();
const SongHandler = require("../handlers/songsHandlers");

const songHandler = new SongHandler()

songsRouter.get("/", songHandler.getSongs);
songsRouter.get("/:id", songHandler.getSongById);
songsRouter.get("/name", songHandler.getSongByName);
songsRouter.get("/artist", songHandler.getSongsByArtist);
songsRouter.get("/genre", songHandler.getSongsByGenre);
songsRouter.post("/", songHandler.postSong);
songsRouter.put("/:id", songHandler.putSong);
songsRouter.delete('/:id', songHandler.deleteSong)

module.exports = songsRouter;