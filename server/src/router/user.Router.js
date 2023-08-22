const express = require("express");
const mainRouter = express();

const { userHandler, handleruserPost } = require("../handler/user.handler");

// mainRouter.get("/", (req, res) => {
//   res.send("estas en el user casi que mi Router");
// });

mainRouter.get("/", userHandler);
mainRouter.post("/", handleruserPost);

module.exports = mainRouter;
