const express = require('express');

const projectRouter = require('./data/routers/ProjectRouter');
const actionRouter = require('./data/routers/ActionRouter');

const server = express();

server.use(express.json());

server.use('/api/actions', actionRouter)
server.use('/api/projects', projectRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Web API Sprint Challenge!'})
})

module.exports = server;