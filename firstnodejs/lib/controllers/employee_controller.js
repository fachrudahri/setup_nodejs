'use strict';

let db = require('../config/mysql_config');
let EmployeeRepository = require('../repositories/employee_repository');
let Employee = require('../domains/employee');

let saveEmployee = (req, res, next) => {
    if(!req.body) {
        next('semua field harus diisi....');
    }
    let data = req.body;
    let employee = new Employee(data.code, data.name, data.job, parseFloat(data.salary));
    let employeeRepo = new EmployeeRepository(db);
    employeeRepo.save(employee, result =>{
        res.send('Tambah data sukses');
        next();
    }, err =>{
        if(err) {
            next(err);
        }
    });
};

module.exports = {
    saveEmployee: saveEmployee
};