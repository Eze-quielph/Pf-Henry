const express = require("express");
const usersRouter = express();

const UserHandler = require("../handlers/usersHandlers");

const userHandler = new UserHandler()

usersRouter.get("/", userHandler.getUsers);
usersRouter.get("/:id", userHandler.getuserById);
usersRouter.post("/", userHandler.postUser);
usersRouter.delete("/:id", userHandler.deleteUser);
usersRouter.put("/:id", userHandler.updateUser);

module.exports = usersRouter;
