const express = require('express');
const db = require('../helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    db.get().then(projects => res.status(201).json(projects))
})

module.exports = router;