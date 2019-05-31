const express = require('express');
const db = require('../helpers/actionModel');

const router = express.Router();

router.get('/', (req, res) => {
    db.get().then(actions => res.status(201).json(actions))
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    db.get(id).then(action => res.status(201).json(action))
})

router.post('/', (req, res) => {
    db.insert(req.body).then(action => res.status(201).json(action))
})

router.put('/:id', (req, res) => {
    const { id } = req.params;
    db.update(id, req.body).then(action => res.status(201).json(action))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    db.remove(id).then(() => res.status(201).json({ message: 'Action has been successfully removed' }))
})

module.exports = router;