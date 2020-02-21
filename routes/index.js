const express = require('express'),
  router = express.Router(),
  path = require('path');

/* GET home page. */
router.get('/*', function (req, res, next) {
  res.sendFile('../public/index.html'); // Loads react application
});

module.exports = router;
