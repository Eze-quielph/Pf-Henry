const app = require("./src/app");
const { sequelize } = require("./src/db");
const DataService = require('./services/data.services')
const {songs, users} = require('./services/data')
require('dotenv').config()

const dataService = new DataService(songs, users);

dataService.initializeData()
    .then(() => {
        console.log('Data initialization completed successfully.');
    })
    .catch(error => {
        console.error('Error during data initialization:', error);
    });

const PORT = process.env.PORT ?? 3001

app.listen(PORT, () => {
  sequelize.sync({ force: true });
  console.log(`Listening on port ${PORT}`);
});