'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'node_app_1'
});

connection.connect();

module.exports = connection;