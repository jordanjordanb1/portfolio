const express = require('express'),
    router = express.Router();

const contactRoute = require('./api/contact'),
    projectsRoute = require('./api/projects')

router.use('/contact', contactRoute)
router.use('/projects', projectsRoute)

module.exports = router;