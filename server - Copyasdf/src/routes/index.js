const { Router } = require("express");

// Importo todas las rutas
const usersRouter = require("./users.routes");
const songsRouter = require("./songs.routes");
const playlistsRouter = require("./playlists.routes");

// Configuro los routers
const mainRouter = Router();

mainRouter.use("/users", usersRouter);
mainRouter.use("/songs", songsRouter);
mainRouter.use("/playlists", playlistsRouter);

// Exporto el router principal
module.exports = mainRouter;