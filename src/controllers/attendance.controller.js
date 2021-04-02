
//const Employee = require('../models/employee.model');
const Attendance = require('../models/attendance.model');
const AttendanceModel  =  require('../models/attendance.model');

// get all attendance list 
exports.getAttendanceList = (req , res)=>{
   // res.send("Here is list of data");
    AttendanceModel.getAllAttendanceList((err, attendanceList)=>{

            if(err){
                res.send(err);
            }

            if(attendanceList == "")
            {  
                console.log('Empty Database ' , attendanceList);
                res.json({status: 404 , message :'Empty Database', })   
            }

            if(attendanceList !=""){
               console.log('Attendance list' , attendanceList);
               res.send(attendanceList);
            }
    })
}

// create Attendance list

exports.createAttendance =(req , res )=>{
    const attendanceReqData  = new  AttendanceModel(req.body);
    console.log( "attendancereqData" , attendanceReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        AttendanceModel.createAttendance(attendanceReqData , (err , attendance)=>{
            if(err){
                console.log("Error : ",err);
                res.send(err);
            }if(attendance){
                 console.log("attendance  ceated succesfully");
                 res.json({success : 200 , message : ' Attendance created successfully ' , id: attendance.insertId});
            }    
        });
   }
}


// get attendance by Id
exports.getAttendanceById  = (req , res)=>{
       AttendanceModel.getAttendanceById(req.params.id , (err , attendance)=>{
          if(err){
           console.log('Single attendance list  fetching error', );
           res.send(err);
          }
          if(attendance==""){
                console.log('Records not found', attendance);
                res.json({success: 404 , message :'Records Not Found', userId : attendance.insertId})
          }else
          {
                console.log('Single attendance fetched successfully', attendance);
                res.send(attendance);
          }  
    })
} 



// delete Task
exports.deleteAttendanceById =(req , res )=>{
    const  attendanceReqData = new AttendanceModel(req.body);
    console.log( "AttendaceReqData deleted" , attendanceReqData);
        console.log("deleted attendance  data");
        AttendanceModel.deleteAttendanceById(req.params.id  , (err , attendance)=>{
            if(err){
                res.send(err);
                res.json({success : 0 , message : ' Error while deleting data ' , userId: attendance.insertId});   
            }else{
           
            res.json({ success : 200 , message : ' Attendance deleted successfully' , userId : attendance.insertId})
            }
        });
} 


    // find duplicate Attendance list
    exports.dateToday =(req , res)=>{
    const  attnReqData  = new  AttendanceModel(req.body);
    console.log( "attnReqData :" ,attnReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        AttendanceModel.dateToday(attnReqData , (err , attendance)=>{
            if(err){
                 console.log(err);
                 res.send(err);
            }
            if(attendance ==""){
                 console.log("Today's entry not found");
                 res.json({ status : 404 , message : ' Todays entry not found'})
            } else{
                console.log("Today's entry foiund ");
                res.json({status :200 , message:' Todays entry found '});
            }   
        });
    }
} 


    // find days from month 
    exports.getDaysByMonth =(req , res)=>{
    const  attnReqData  = new  AttendanceModel(req.body);
    console.log( "attnReqData :" ,attnReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        AttendanceModel.getDaysByMonth( attnReqData , (err , attendance)=>{
            if(err){
                 console.log(err);
                 res.send(err);
            }
            if(attendance ==""){
                 console.log("days not  found in given  month ");
                 res.json({ status : 404 , message : ' NO RECORDS FOUND '})
            } else{
                console.log("Days found  in given month ");
                res.send(attendance);
            }   
        });
    }
} 
