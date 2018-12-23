'use strict';

let http = require('http');
let server = require('./lib/server');

const PORT = process.env.PORT || 8000;

server.set('port', PORT);
let app = http.createServer(server);

app.listen(PORT, () => {
    console.log('Server telah aktif...!');
});