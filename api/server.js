// BUILD YOUR SERVER HERE
const express = require('express');
const User = require('./users/model');

const server = express();

server.use(express.json())

server.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = server; // EXPORT YOUR SERVER instead of {}
