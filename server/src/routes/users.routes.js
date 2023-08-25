const usersRouter = require("express").Router();

const UserHandler = require("../handlers/usersHandlers");

const userHandler = new UserHandler()

usersRouter.get("/", userHandler.getUsers);
usersRouter.get("/:id", userHandler.getUserById);
usersRouter.post("/", userHandler.postUser);
usersRouter.delete("/:id", userHandler.deleteUser);
usersRouter.put("/:id", userHandler.putUser);

module.exports = usersRouter;
