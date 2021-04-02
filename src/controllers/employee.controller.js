
//const Employee = require('../models/employee.model');
const Employee = require('../models/employee.model');
const EmployeeModel  =  require('../models/employee.model');




// get all employee list 
exports.getEmployeeList = (req , res)=>{
   // res.send("Here is list of data");
    EmployeeModel.getAllEmployees((err, employees)=>{

           if(err){
             res.send(err);
           }
            if(employees == "")
            {
                console.log('Empty Database ' , employees);
                res.json({status: 404 , message :'Empty Database', userId : employees.insertId})   
            }
            if(employees !=""){

               console.log('Employeesgggg' , employees);
               res.send(employees);
            }
    })
}

// get employee by Id
exports.getEmployeeById  = (req , res)=>{
       EmployeeModel.getEmployeeById(req.params.id , (err , employee)=>{
         if(err){
           console.log('Single employee fetching error', employee);
           res.send(err);
          }
          if(employee ==""){
                console.log('Records not found', employee);
        
              res.json({success: 404 , message :'Records Not Found', userId : employee.insertId})
          }else
          {
                console.log('Single employee fetched successfully', employee);
                res.send(employee);
          }  
    })
}

// create Employee
exports.createnewEmployee =(req , res )=>{
    const  employeeReqData  = new  EmployeeModel(req.body);
    console.log( "employeereqData" , employeeReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        EmployeeModel.createnewEmployee(employeeReqData , (err , employee)=>{
            if(err){
                console.log("Email already exist ",err);
                res.send(err);
              // res.json({success : 400 , message : ' Email already exist '});
              
            }if(employee){
                 console.log("Employee  ceated succesfully");
                 res.json({success : 200 , message : ' Employee created successfully ' , userId: employee.insertId});
            }    
        });
    }
} 

// update Employee
exports.updateEmployee =(req , res )=>{
    const  employeeReqData  = new  EmployeeModel(req.body);
    console.log( "employeeReqData update" , employeeReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        console.log("update data");
        EmployeeModel.updateEmployee(req.params.id , employeeReqData , (err , employee)=>{
                if(err)
                res.send(err);
                res.json({success : 200 , message : 'Employee updated successfully ' , userId: employee.insertId});    
        });
    }
} 

// delete Employee
exports.deleteEmployee =(req , res )=>{
    const  employeeReqData  = new  EmployeeModel(req.body);
    console.log( "employeeReqData delete" , employeeReqData);
   
        console.log("delete  data");
        EmployeeModel.deleteEmployee(req.params.id  , (err , employee)=>{
            if(err){
                res.send(err);
                res.json({success : 0 , message : ' Error while deleting data ' , userId: employee.insertId});   
            }
           
            res.json({ success : 200 , message : ' Employee deleted successfully' , userId : employee.insertId})
            
        });
  //  }
} 


// userAuthentication 
    exports.userAuthentication =(req , res )=>{
    const  employeeReqData  = new  EmployeeModel(req.body);
    console.log( "employeereqData" ,employeeReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        EmployeeModel.userAuthentication(employeeReqData , (err , employee)=>{
            if(err){
                 console.log(err);
                 res.send(err);
            }
            if(employee ==""){
                 console.log(" you are not Authorised ");
                res.send("400")
            } else{
                console.log(" Authorisation is valid ");
               res.json(employee);
            }   
        });
    }
} 
// get employee by email
    exports.getEmployeeByEmail =(req , res )=>{
    const  employeeReqData  = new  EmployeeModel(req.body);
    console.log( "employeereqData" ,employeeReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        EmployeeModel.getEmployeeByEmail(employeeReqData , (err , employee)=>{
            if(err){
                 console.log(err);
                 res.send(err);
            }
            if(employee ==""){
                 console.log(" Email not found ");
                res.send("400")
            } else{
              console.log(" Employee by emai fetched successfully ");
              res.json(employee);
            }   
        });
    }
} 
