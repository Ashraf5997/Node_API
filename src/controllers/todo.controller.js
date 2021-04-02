
//const Employee = require('../models/employee.model');
const Todo = require('../models/todo.model');
const TodoModel  =  require('../models/todo.model');

// get all todo list 
exports.getTodoList = (req , res)=>{
   // res.send("Here is list of data");
    TodoModel.getAllTodoList((err, todoList)=>{

            if(err){
                res.send(err);
            }

            if(todoList == "")
            {  
                console.log('Empty Database ' , Todolist);
                res.json({status: 404 , message :'Empty Database', })   
            }

            if(todoList !=""){
               console.log('todolist' , todoList);
               res.send(todoList);
            }
    })
}


// create ToDo list
exports.createTodoList =(req , res )=>{
    const todoReqData  = new  TodoModel(req.body);
    console.log( "toreqData" , todoReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        TodoModel.createTodoList(todoReqData , (err , todo)=>{
            if(err){
                console.log("Error : ",err);
                res.send(err);
            }if(todo){
                 console.log("Todolist  ceated succesfully");
                 res.json({success : 200 , message : ' TodoList created successfully ' , id: todo.insertId});
            }    
        });
   }
}


// get task by Id
exports.getTaskById  = (req , res)=>{
       TodoModel.getTaskById(req.params.id , (err , todo)=>{
          if(err){
           console.log('Single todo list  fetching error', );
           res.send(err);
          }
          if(todo ==""){
                console.log('Records not found', todo);
                res.json({success: 404 , message :'Records Not Found', userId : todo.insertId})
          }else
          {
                console.log('Single todoList fetched successfully', todo);
                res.send(todo);
          }  
    })
} 


// Update Task 
exports.updateTask =(req , res )=>{
    const  taskReqData  = new  TodoModel(req.body);
    console.log("task update :", taskReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
         console.log("updated  task data");
         TodoModel.updateTodoTask(req.params.id , taskReqData , (err , todo)=>{
         if(err){
            res.send(err);
         }
         else{
            if(todo =""){
                 res.json({success : 400 , message : 'No user found ' , userId: todo.insertId});  
            }else{
                res.json({success : 200 , message : 'Task updated successfully ' , userId: todo.insertId});  
                }
           } 
        });
    }
} 

// delete Task
exports.deleteTask =(req , res )=>{
    const  taskReqData = new TodoModel(req.body);
    console.log( "TaskReqData delete" , taskReqData);
        console.log("delete  data");
        TodoModel.deleteTask(req.params.id  , (err , todo)=>{
            if(err){
                res.send(err);
                res.json({success : 0 , message : ' Error while deleting data ' , userId: todo.insertId});   
            }else{
           
            res.json({ success : 200 , message : ' Task deleted successfully' , userId : todo.insertId})
            }
        });
} 


// getDuplicateDayById
exports.getDuplicateDayById =(req , res )=>{
    const todoReqData  = new  TodoModel(req.body);
    console.log( "toreqData" , todoReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        TodoModel.getDuplicateDayById(todoReqData , (err , todo)=>{
            if(err){
                console.log("Error in fetching duplicateDayById : ",err);
                res.send(err);
            }if(todo == ""){
                 console.log("days for task not  found in given  month ");
                 res.json({ status : 404 , message : ' NO RECORDS FOUND '})
            }  
            else
            {
                 console.log("duplicateDay fetched succesfully");
                 res.send(todo)
            }  
        });
   }
}

// getTaskByDay
exports.getTaskByDay =(req , res )=>{
    const todoReqData  = new  TodoModel(req.body);
    console.log( "toreqData" , todoReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        TodoModel.getTaskByDay(todoReqData , (err , todo)=>{
            if(err){
                console.log("Error in fetching task by day : ",err);
                res.send(err);
            }if(todo){
                 console.log("task by day fetched succesfully");
                 res.send(todo)
            }    
        });
   }
}


// Get  All Pending  Task    by Id
exports.getPendingTask  = (req , res)=>{
       TodoModel.getPendingTask(req.params.id , (err , todo)=>{
          if(err){
           console.log('Pending Task   fetching error', );
           res.send(err);
          }
          if(todo ==""){
                console.log('Records not found', todo);
                res.json({success: 404 , message :'Records Not Found', userId : todo.insertId})
          }else
          {
                console.log('Pending Task fetched successfully', todo);
                res.send(todo);
          }  
    })
} 

// get task by TASK Id
exports.getTaskByTaskId  = (req , res)=>{
       TodoModel.getTaskByTaskId(req.params.id , (err , todo)=>{
          if(err){
           console.log('Single todo list  fetching error By TASK ID', );
           res.send(err);
          }
          if(todo ==""){
                console.log('Records not found', todo);
                res.json({success: 404 , message :'Records Not Found', userId : todo.insertId})
          }else
          {
                console.log('Single todoList fetched successfully by TASK ID', todo);
                res.send(todo);
          }  
    })
} 



// Get  All Employees Name From TODO
/*exports.getPendingTask  = (req , res)=>{
       TodoModel.getAllEmpFromToDo(req.params.id , (err , todo)=>{
          if(err){
           console.log('Emp From ToDo Task   fetching error', );
           res.send(err);
          }
          if(todo ==""){
                console.log('Records not found', todo);
                res.json({success: 404 , message :'Records Not Found', userId : todo.insertId})
          }else
          {
                console.log('Emp name  fetched successfully', todo);
                res.send(todo);
          }  
    })
} */



