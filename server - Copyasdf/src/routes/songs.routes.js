const express = require("express");
const songsRouter = express();

const { getSongsHandler, postSongHandler } = require("../handlers/songsHandlers");

songsRouter.get("/", getSongsHandler);
songsRouter.post("/", postSongHandler);

module.exports = songsRouter;