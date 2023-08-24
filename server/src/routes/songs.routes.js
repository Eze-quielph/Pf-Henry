const express = require("express");
const songsRouter = express();
const SongHandle = require("../handlers/songsHandlers");

const songHandle = new SongHandle()

songsRouter.get("/", songHandle.getSongsHandler);
songsRouter.post("/", songHandle.postSongHandler);
songsRouter.delete('/:id', songHandle.deleteSong)

module.exports = songsRouter;