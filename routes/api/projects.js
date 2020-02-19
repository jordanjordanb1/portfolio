const express = require('express'),
    router = express.Router(),
    Projects = require('../../models/Projects')

router.get('/', (req, res) => {
    Projects.find({}, (err, projects) => {
        if (err)
            return res.json({ success: false, err })
        else
            return res.json({ success: true, projects })
    })
})

module.exports = router;