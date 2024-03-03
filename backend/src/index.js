const mongoose = require('mongoose');
const app = require('./app');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env')})

const {
  PORT,
  URI_MONGO_DB
  } = process.env

const port = PORT || 3007

mongoose.connect(URI_MONGO_DB)
  .then(() => {
    console.log("You successfully connected to MongoDB!");
    app.listen(port, () => {
      console.log("My port is " + port);
    })
  })
  .catch(error => {
    console.error("Connection fail", error);
  });

