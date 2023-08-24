const express = require("express");
const playlistsRouter = express();
const PlaylistHandler = require('../handlers/playlistsHandlers')
const playlistHandler = new PlaylistHandler()

playlistsRouter.get("/", playlistHandler.getPlaylists);
playlistsRouter.get("/:id", playlistHandler.getPlaylistById);
playlistsRouter.get("/name", playlistHandler.getPlaylistByName);
playlistsRouter.post("/", playlistHandler.postPlaylist);
playlistsRouter.put('/:id', playlistHandler.putPlaylist);
playlistsRouter.delete("/:id", playlistHandler.deletePlaylist);

module.exports = playlistsRouter;