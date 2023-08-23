const app = require("./src/app");
const PORT = require("./src/config");
const { sequelize } = require("./src/db");

app.listen(PORT, () => {
  //sequelize.sync({ force: true });
  sequelize.sync({ alter: true });
  console.log(`Listening on port ${PORT}`);
});
