module.exports = app => {
  app.use('/api/contact', require('./api/contact'));
  app.use('/api/projects', require('./api/projects'));
};
