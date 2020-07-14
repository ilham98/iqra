const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require('path');

console.log(port);

app.use(express.static(process.cwd()+"/client/dist/client/"));

app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(port, () => console.log('yollooo '));