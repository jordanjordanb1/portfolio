const Projects = require('../../models/Projects');
const router = require('express').Router();

router.all(() => {
  console.log('Route was called!');
});

router.get('/', (req, res) => {
  Projects.find({}, (err, projects) => {
    if (err) return res.json({ success: false, err });
    else return res.json({ success: true, projects });
  });
});

module.exports = router;
