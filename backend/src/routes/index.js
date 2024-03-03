const express = require('express');
const userLogin = require('./userLogin')

const routerApi = (app) => {
  const router = express.Router();
  app.use('/', router);
  router.use('/userLogin', userLogin);
};

module.exports = routerApi;
