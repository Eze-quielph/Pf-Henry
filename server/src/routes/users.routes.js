const usersRouter = require("express").Router();

//Middleware
const getUser = require('../middleware/Users/Middleware.userID')
const postUser = require('../middleware/Users/MiddlewarePostUser')
const updateUser = require('../middleware/Users/Middleware.putUser')

//Handler
const UserHandler = require("../handlers/usersHandlers");
const userHandler = new UserHandler()

//Routes
usersRouter.get("/", getUser, userHandler.getUsers);
usersRouter.get("/:id", getUser, userHandler.getUserById);
usersRouter.post("/", postUser, userHandler.postUser);
usersRouter.delete("/:id", getUser, userHandler.deleteUser);
usersRouter.put("/:id", updateUser, userHandler.putUser);

module.exports = usersRouter;
