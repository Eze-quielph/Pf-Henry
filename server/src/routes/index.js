const express = require("express");
const mainRouter = express.Router();

// Importo todas las rutas
const usersRouter = require("./users.routes");
const songsRouter = require("./songs.routes");
const playlistsRouter = require("./playlists.routes");
const contactRouter = require("./contact.routes"); 

// Configuro las rutas
mainRouter.use("/users", usersRouter);
mainRouter.use("/songs", songsRouter);
mainRouter.use("/playlists", playlistsRouter);
mainRouter.use("/contact", contactRouter); // Agrego la ruta de contacto

// Exporto el router principal
module.exports = mainRouter;
