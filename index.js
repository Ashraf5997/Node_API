
const express     =   require('express');
const bodyParser  =   require('body-parser');
const cors = require('cors');

const app   =  express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const employeeRoutes        = require('./src/routes/employee.route');
const todoRoutes            = require('./src/routes/todo.route');
const attendanceRoutes      = require('./src/routes/attendance.route');
const noticeRoutes          = require('./src/routes/notice.route');


const port     =  process.env.PORT || 9000;
const baseUrl  = '/api/v1/e-res';

//ATTENDANCE ROUTES
app.use('/api/v1/e-res',attendanceRoutes);

// EMPLOYEE ROUTES
app.use(baseUrl,employeeRoutes);

// TODO ROUTES
app.use('/api/v1/e-res',todoRoutes);

// NOTICE ROUTES
app.use('/api/v1/e-res',noticeRoutes);

// WELCOME ROUTE
app.get("/welcome",(req,res)=>{

    res.send("Welcome to E-RES HOME PAGE");

})
app.get("/",(req,res)=>{

    res.send("Welcome to E-RES");

})

//listining the port
app.listen(port,()=>{
    console.log("Express server is running at PORT "+port);
})


                ///////////////////////////////////////////////////////////////////////////////////////////////

/*
 const mysql = require('mysql');
  const cors = require('cors');

 const express     =   require('express');
 const bodyParser  =   require('body-parser');
  
  
 const app= express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use(express.json());
 app.use(cors());

 var dbConn = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'jamal@5997',
    database : 'e-res_database'
 })

 dbConn.connect(function(error ){
    if(!error){
    console.log("Database connected successfully");
    }
   
})
app.listen(9090,()=>{
     console.log("server is running at 9090");
})

app.get('/employees',(req,res)=>{
  dbConn.query('SELECT * FROM employees',(err , rows ,fields)=>{
      if(!err)
      {
          console.log(rows);
          res.json(rows);
      }
      else{
          console.log(err)
      }
  })
})*/