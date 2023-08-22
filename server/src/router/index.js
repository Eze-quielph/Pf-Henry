const useRoter = require("express").Router();
const routerUser = require("./user.Router");

// useRoter.use("/user", (req, res) => {
//   res.send("estas esn index de router");
// });

useRoter.use("/user", routerUser);
module.exports = useRoter;
