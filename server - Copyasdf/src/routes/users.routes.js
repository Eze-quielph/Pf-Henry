const express = require("express");
const usersRouter = express();

const {
  getUsersHandler,
  postUserHandler,
  getuserByIdHandler,
  deleteUserData,
  actualizarUser,
} = require("../handlers/usersHandlers");

usersRouter.get("/", getUsersHandler);
usersRouter.get("/:id", getuserByIdHandler);
usersRouter.post("/", postUserHandler);
usersRouter.delete("/:id", deleteUserData);
usersRouter.put("/:id", actualizarUser);

module.exports = usersRouter;
