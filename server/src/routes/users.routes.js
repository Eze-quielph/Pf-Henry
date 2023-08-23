const express = require("express");
const usersRouter = express();

const { getUsersHandler, postUserHandler } = require("../handlers/usersHandlers");

usersRouter.get("/", getUsersHandler);
usersRouter.post("/", postUserHandler);

module.exports = usersRouter;
