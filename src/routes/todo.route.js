

const express = require('express');
const router  = express.Router(); 

const TodoController = require('../controllers/todo.controller');

//get all  todoList
router.get('/task',TodoController.getTodoList);

//create newEmployee
router.post('/createTask',TodoController.createTodoList);

//get TodoList by userid
router.get('/taskById/:id', TodoController.getTaskById);

//update task
router.put('/updateTask/:id',TodoController.updateTask);

//delete Employee
router.delete('/deleteTask/:id',TodoController.deleteTask);

//get duplicate day by Id
router.post('/getDuplicateDayById',TodoController.getDuplicateDayById)

//get all day by Id
router.post('/getTaskByDay',TodoController.getTaskByDay)

//get all pending Task by Id
router.get('/getPendingTask/:id',TodoController.getPendingTask)

//get TodoList by TASK id
router.get('/task/:id', TodoController.getTaskByTaskId);

//get all Employee from TODO TABLE
//router.get('/getAllEmpNameFromToDo',TodoController.getAllEmpNameFromToDo)


module.exports = router;