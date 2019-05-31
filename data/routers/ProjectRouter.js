const express = require('express');
const db = require('../helpers/projectModel');

const router = express.Router();

router.get('/', (req, res) => {
    db.get().then(projects => res.status(201).json(projects))
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    db.get(id).then(project => res.status(201).json(project))
})

router.post('/', (req, res) => {
    db.insert(req.body).then(project => res.status(201).json(project))
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    db.update(id, req.body).then(project => res.status(201).json(project))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.remove(id).then(() => res.status(201).json({ message: 'Project was successfully removed.' }))
})

module.exports = router;