
 var      dbConn = require('../../config/db.config');
 const    bcrypt = require("bcrypt");
 const    saltRound = 10 ;

 var AttendanceData  = function(attendance){

    this.userid            =  attendance.userid;
    this.username          =  attendance.username;
    this.day               =  attendance.day;
    this.month             =  attendance.month;
    this.year              =  attendance.year;
    this.edate             =  attendance.edate;
    this.etime             =  attendance.etime;

  }

// get all attendance
 AttendanceData.getAllAttendanceList = (result)=>{
    dbConn.query("SELECT * FROM attendance" , (err , res )=>{
    if(err)
    {
        console.log("error while fetching  all attendance");
        result(null , err);
    }
    else{
        console.log("all AttendanceData fetched successfully");
        result(null , res);  
       }
  })
 }

// create Attendance

AttendanceData.createAttendance = (attendancedata , result) =>
{
  dbConn.query('INSERT INTO attendance SET?' , attendancedata , (err , res)=>{
      if(err)
      {
        console.log("Error while inserting attendance data");
        //result({success : 400 , message : 'This Email already exist '})
        result("Already createded try next day")
      }else
      {
          console.log("Attendance created successfully");
          result(null , res);
        //  result.json({success:200 ,message:'' })
      }
  })
}


//get attendance by Id 
AttendanceData.getAttendanceById  = (id ,  result ) =>{
    dbConn.query("SELECT * FROM attendance  WHERE  userid =?", id,(err, res)=>{
       if(err){
           console.log("Error while  fetching attendance by id " , err);
           result(null , err);
       }else{
        console.log("Attendance by id fetched successfully");
        result(null,res);
        console.log(res);
       }
    })
}


// delete attendance
AttendanceData.deleteAttendanceById = (id  , result )=>{
    dbConn.query(  "DELETE  FROM  attendance WHERE id =?",[id] ,(err,res)=>{
       if(err)
       {
           console.log("Error while deleting attendance");
           result(null , err);
       }
       else{
           console.log("Attendance deleted successfully");
           result(null , res);
       }
    })
  }

 // find today date
 AttendanceData.dateToday = (attnData ,  result ) =>{
    const userid = attnData.userid;
    const edate  = attnData.edate;
    dbConn.query("SELECT * FROM attendance  WHERE  userid =? And  edate =?" ,[userid,edate] ,(err, res)=>{
       if(err){
           console.log("Error while fetching" , err);
           result(null , err);
       }else{
     
        if(res ==""){
            console.log("todays' entry not found");
            result( null ,res);
        }
        else{
          console.log(" today's entry not found");
          result(null,res);
        }
       }
    })
  }

  ///  find days in given month
 AttendanceData.getDaysByMonth= (attnData ,  result ) =>{
    const userid = attnData.userid;
    const month  = attnData.month;
    dbConn.query("SELECT * FROM attendance  WHERE  userid =? And  month =?" ,[userid,month] ,(err, res)=>{
       if(err){
           console.log("Error while fetching days in month " , err);
           result(null , err);
       }else{
     
        if(res ==""){
            console.log("days  not found in given month");
            result( null ,res);
        }
        else{
          console.log("days found in given month");
          result(null,res);
        }
       }
    })
  }

module.exports= AttendanceData;
