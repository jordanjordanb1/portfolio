const router = require('express').Router();

module.exports = () => {
  router.use('/contact', require('./api/contact')(router));
  router.use('/projects', require('./api/projects')(router));
};
