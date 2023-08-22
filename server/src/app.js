const express = require("express");
const morgan = require("morgan");
const { Model } = require("sequelize");
const useRoter = require("./router/index");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.send("estas en elapp");
// });

app.use(useRoter);

module.exports = app;
