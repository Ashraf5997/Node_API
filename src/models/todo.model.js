
var      dbConn = require('../../config/db.config');
const    bcrypt = require("bcrypt");
const    saltRound = 10 ;

  var todoList = function(todo){
    this.task          =   todo.task;
    this.userid        =   todo.userid;
    this.edate         =   todo.edate
    this.etime         =   todo.etime;
    this.day           =   todo.day;
    this.month         =   todo.month;
    this.year          =   todo.year;
    this.status        =   todo.status
  }

// get all task
 todoList.getAllTodoList = (result)=>{
    dbConn.query("SELECT * FROM todo" , (err , res )=>{
    if(err)
    {
        console.log("error while fetching  all employeedata");
        result(null , err);
    }
    else{
        console.log("allEmployees fetched successfully");
        result(null , res);  
       }
  })
 }

// create Employee
todoList.createTodoList = (Tododata , result) =>
{
  dbConn.query('INSERT INTO todo SET?' , Tododata , (err , res)=>{
      if(err)
      {
        console.log("Error while inserting data");
        //result({success : 400 , message : 'This Email already exist '})
        result("Error try later")
      }else
      {
          console.log("TodoList created successfully");
          result(null , res);
        //  result.json({success:200 ,message:'' })
      }
  })
}


//get task  by Id 
todoList.getTaskById  = (id ,  result ) =>{
    dbConn.query("SELECT * FROM todo  WHERE  userid =?", id,(err, res)=>{
       if(err){
           console.log("Error while  fetching task by id " , err);
           result(null , err);
       }else{
        console.log("Task by id fetched successfully");
        result(null,res);
        console.log(res);
       }
    })
}

// update Task
todoList.updateTodoTask = (id , rData , result )=>{
  dbConn.query(  "UPDATE todo SET status =? , task=? WHERE id =?", [rData.status,rData.task , id] ,(err,res)=>{
     if(err)
     {
         console.log("Error while updating task");
         result(null , err);
     }
     else{
         console.log("Task updated  successfully");
         result(null , res);
     }
  })
}

// delete Task
todoList.deleteTask = (id  , result )=>{
    dbConn.query(  "DELETE  FROM  todo WHERE id =?",[id] ,(err,res)=>{
       if(err)
       {
           console.log("Error while deleting task");
           result(null , err);
       }
       else{
           console.log("Task deleted successfully");
           result(null , res);
       }
    })
  }

  // getDuplicateDayById
todoList.getDuplicateDayById = (todo , result) =>
{
  dbConn.query('SELECT edate FROM todo WHERE userid=? and month=? group by day' , [todo.userid,todo.month], (err , res)=>{
      if(err)
      {
        console.log("Error while fetching duolicate day data");
        //result({success : 400 , message : 'This Email already exist '})
        result("Error try later")
      }else
      {
          console.log("Duplicate Day fetched successfully");
          result(null , res);
        //  result.json({success:200 ,message:'' })
      }
  })
}

  // getTaskByDay
todoList.getTaskByDay = (todo , result) =>
{   
  dbConn.query('SELECT * FROM todo WHERE userid=? and edate=? ' , [todo.userid,todo.edate], (err , res)=>{
      if(err)
      {
        console.log("Error while fetching  taskbyday data");
        //result({success : 400 , message : 'This Email already exist '})
        result("Error try later")
      }else
      {
          console.log("Taskbyday fetched successfully");
          result(null , res);
        //  result.json({success:200 ,message:'' })
      }
  })
}


//get All pending TAsk
todoList.getPendingTask  = (id ,  result ) =>{
    dbConn.query("SELECT * FROM todo  WHERE status=0 and  userid =?", id,(err, res)=>{
       if(err){
           console.log("Error while  Pending  task by id " , err);
           result(null , err);
       }else{
        console.log("Pending Task by id fetched successfully");

        result(null,res);
        console.log(res);
       }
    })
}

//get task  by TASK ID
todoList.getTaskByTaskId  = (id ,  result ) =>{
    dbConn.query("SELECT * FROM todo  WHERE  id =?", id,(err, res)=>{
       if(err){
           console.log("Error while  fetching task by task id " , err);
           result(null , err);
       }else{
        console.log("Task by task  id fetched successfully");
        result(null,res);
        console.log(res);
       }
    })
}

 // get ALL EMP FROM TODO AND EMPLOYEE  TABLE
/*todoList.getAllEmpFromToDo = (todo , result) =>
{
  dbConn.query('SELECT  * FROM  WHERE userid=? and month=? group by day' , [todo.userid,todo.month], (err , res)=>{
      if(err)
      {
        console.log("Error while fetching duolicate day data");
        //result({success : 400 , message : 'This Email already exist '})
        result("Error try later")
      }else
      {
          console.log("Duplicate Day fetched successfully");
          result(null , res);
        //  result.json({success:200 ,message:'' })
      }
  })
}*/

module.exports= todoList;