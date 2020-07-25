const express = require('express');
const path = require('path');
const server = express();

const port = 3000;

server.use(express.static(path.join(__dirname, './static')));

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './static/index.html'));
});

server.get('/speakers', (req, res) => {
    res.sendFile(path.join(__dirname, './static/speakers.html'));
});

server.listen(port, () => {
    console.info('Express listening on port ', port);
});