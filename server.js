const express = require('express');

const projectRouter = require('./data/routers/ProjectRouter');
const actionRouter = require('./data/routers/ActionRouter');

const server = express();

server.use(express.json());

server.use('/api/actions', logger, actionRouter)
server.use('/api/projects', logger,  projectRouter)

server.get('/', (req, res) => {
    res.json({ message: 'Welcome to my Web API Sprint Challenge!'})
})

//middleware logger
function logger(req, res, next) {
    console.log(`A ${req.method} request to ${req.originalUrl} was made at ${Date.now()}`)
    next();
}

module.exports = server;