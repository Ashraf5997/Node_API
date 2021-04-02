



const express = require('express');

const router  = express.Router(); 

const EmployeeController = require('../controllers/employee.controller');

//get all  employee
router.get('/employees',EmployeeController.getEmployeeList);

//get employee by id
router.get('/employee/:id', EmployeeController.getEmployeeById);

//create newEmployee
router.post('/createEmployee',EmployeeController.createnewEmployee);

//update Employee
router.put('/updateEmployee/:id',EmployeeController.updateEmployee);

//delete Employee
router.delete('/:id',EmployeeController.deleteEmployee);

// authentication
router.post('/userAuthentication',EmployeeController.userAuthentication);

//get employee by id
router.post('/getEmployeeByEmail', EmployeeController.getEmployeeByEmail);

module.exports = router;