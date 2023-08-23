const express = require("express");
const morgan = require("morgan");
const mainRouter = require("./routes/index");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
//configuracionGlobal de cors
app.use(cors());

app.use(mainRouter);

module.exports = app;
