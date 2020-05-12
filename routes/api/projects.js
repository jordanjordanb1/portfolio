const Projects = require('../../models/Projects');

module.exports = (router) => {
  router.get('/', (req, res) => {
    Projects.find({}, (err, projects) => {
      if (err) return res.json({ success: false, err });
      else return res.json({ success: true, projects });
    });
  });
};
