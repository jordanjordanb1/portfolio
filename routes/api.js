const express = require('express'),
    router = express.Router();

const contactRoute = require('./api/contact')

router.use('/contact', contactRoute)

module.exports = router;