const express = require("express");
const playlistsRouter = express();
const PlaylistHandle = require('../handlers/playlistsHandlers')
const playlistsHandlers = new PlaylistHandle()

playlistsRouter.get("/", playlistsHandlers.getPlaylists);
playlistsRouter.post("/", playlistsHandlers.postPlaylist);
playlistsRouter.put('/:id', playlistsHandlers.updatePlaylist)

module.exports = playlistsRouter;