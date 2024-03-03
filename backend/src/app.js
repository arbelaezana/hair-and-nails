const express = require('express');
const routerApi = require('./routes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send("This is my backend Hair and Nails")
})

routerApi(app);

module.exports = app;


