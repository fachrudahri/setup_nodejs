'use strict';

let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

let employeeController = require('./controllers/employee_controller');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan('dev'));

app.get('/', (req, res, next) => {
    res.send('Aplikasi pertama node.js kamu fachru dahri');
});

app.post('/employees', employeeController.saveEmployee);
app.put('/employees/:code', employeeController.updateEmployee);
app.delete('/employees/:code', employeeController.deleteEmployee);
app.get('/employees/:code', employeeController.getEmployee);
app.get('/employees', employeeController.getEmployees);

module.exports = app;
