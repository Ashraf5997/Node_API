

var dbConn = require('../../config/db.config');
const   bcrypt = require("bcrypt");
const    saltRound = 10 ;

var Employee = function(employee){
  
    this.fullname       =  employee.fullname;
    this.email          =  employee.email;
    this.contact        =  employee.contact;
    this.createdby      =  employee.createdby;
    this.createdon      =  new Date();
    this.password       =  employee.password;//bcrypt.hashSync(employee.password, saltRound )
    this.designation    =  employee.designation;
    this.address        =  employee.address;
    this.accessibility  =  employee.accessibility;
    this.updatedby      =  employee.updatedby;
    this.updatedon      =  new Date();
    this.deleted        =  employee.deleted;
    this.deletedby      =  employee.deletedby;
    this.deletedon      =  new Date();
    this.age            =  employee.age;
    this.Id_no          =  employee.Id_no;
    this.qualification  =  employee.qualification;
}

// get all employees
Employee.getAllEmployees = (result)=>{
    dbConn.query("SELECT * FROM employees" , (err , res )=>{
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

// get employee  by Id  
Employee.getEmployeeById  = (id ,  result ) =>{
    dbConn.query("SELECT * FROM employees  WHERE  id =?", id,(err, res)=>{
       if(err){
           console.log("Error while  fetching employee by id " , err);
           result(null , err);
       }else{
        console.log("Employee by id fetched successfully");
        result(null,res);
       }
    })
}

// create Employee
Employee.createnewEmployee = (employeedata , result) =>
{
 //console.log(employeedata.password)
  dbConn.query('INSERT INTO employees SET?' , employeedata , (err , res)=>{
      if(err)
      {
        console.log("Error while inserting data");
        //result({success : 400 , message : 'This Email already exist '})
        result("Email exist")
      }else
      {
          console.log("Employee created successfully");
          result(null , res);
        //  result.json({success:200 ,message:'' })
      }
  })

}

// update Employee
Employee.updateEmployee = (id , empReqData , result )=>{
  console.log("Edit Employee Data :", empReqData)

  dbConn.query("UPDATE employees SET fullname=?, email=?,password=?,designation=?,accessibility=?, contact=?, address=?, qualification=? ,Id_no=?, age=? WHERE id =?", 
    [empReqData.fullname , empReqData.email,empReqData.password,empReqData.designation,empReqData.accessibility,empReqData.contact,empReqData.address,empReqData.qualification,empReqData.Id_no, empReqData.age , id] ,(err,res)=>{
   /* dbConn.query("UPDATE employees SET fullname=? WHERE id =?",[empReqData.fullname, id] ,(err,res )=>{*/
     if(err)
     {
         console.log("Error while updating employee data ");
         console.log(err)
         result(null , err);
     }
     else{
         console.log("Employee updated  successfully");
         result(null , res);
     }
  })
}

// delete Employee
Employee.deleteEmployee = (id  , result )=>{
    dbConn.query(  "DELETE FROM  employees WHERE id =?",[id] ,(err,res)=>{
       if(err)
       {
           console.log("Error while deleting");
           result(null , err);
       }
       else{
           console.log("Employee deleted successfully");
           result(null , res);
       }
    })
  }

  // userAuthentication 
Employee.userAuthentication  = (empData ,  result ) =>{
    // console.log(empData.password)
    const email = empData.email;
    const hasPwd= empData.password; //bcrypt.hashSync(empData.password, saltRound );
    dbConn.query("SELECT * FROM employees  WHERE  email =? And  password =?" ,[email,hasPwd] ,(err, res)=>{
       if(err){
           console.log("Error while authorisation" , err);
           result(null , err);
       }else{
     
        if(res ==""){
            console.log("invalid authorisation");
            result( null ,res);
        }
        else{
          console.log(" valid authorisaion ");
          result(null,res);
        }
       }
    })
  }

 // get employee  by Id  
Employee.getEmployeeByEmail  = (EmpData ,  result ) =>{
    dbConn.query("SELECT password FROM employees  WHERE   email =?", [EmpData.email],(err, res)=>{
       if(err){
           console.log("Error while  fetching employee by Email " , err);
           result(null , err);
       }else{
            result(null,res);
       }
    })
}


module.exports= Employee;