const express = require("express");
const playlistsRouter = express();

const { getPlaylistsHandler, postPlaylistHandler } = require("../handlers/playlistsHandlers");

playlistsRouter.get("/", getPlaylistsHandler);
playlistsRouter.post("/", postPlaylistHandler);

module.exports = playlistsRouter;