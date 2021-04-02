
var      dbConn = require('../../config/db.config');
const    bcrypt = require("bcrypt");
const    saltRound = 10 ;

  var Notice = function(notice){

    this.noticeby          =   notice.noticeby;
    this.noticeon          =   notice.noticeon;
    this.noticetime        =   notice.noticetime;
    this.noticetitle       =   notice.noticetitle;
    this.noticemsg         =   notice.noticemsg;
  }

// get all notice
 Notice.getAllNotice = (result)=>{
    dbConn.query("SELECT * FROM notice" , (err , res )=>{
    if(err)
    {
        console.log("error while fetching  all Notice");
        result(null , err);
    }
    else{
        console.log("All notice fetched successfully");
        result(null , res);  
       }
  })
 }

// create Notice
Notice.createNotice = (noticedata , result) =>
{
  dbConn.query('INSERT INTO notice SET?' , noticedata , (err , res)=>{
      if(err)
      {
        console.log("Error while inserting notice data");
        result("Error try later")
      }else
      {
          console.log("Notice  created successfully");
          result(null , res);
      }
  })
}

// update Notice
Notice.updateNotice = (id , rData , result )=>{
  dbConn.query(  "UPDATE notice SET noticemsg=? ,  noticetitle=?   WHERE id =?", [rData.noticemsg ,rData.noticetitle, id] ,(err,res)=>{
     if(err)
     {
         console.log("Error while updating notice");
         result(null , err);
     }
     else{
         console.log("Notice updated  successfully");
         result(null , res);
     }
  })
}

// delete Notice
Notice.deleteNotice = (id  , result )=>{
    dbConn.query(  "DELETE  FROM  Notice WHERE id =?",[id] ,(err,res)=>{
       if(err)
       {
           console.log("Error while deleting notice");
           result(null , err);
       }
       else{
           console.log("notice deleted successfully");
           result(null , res);
       }
    })
  }

// get  notice By Id
 Notice.getNoticeById = ( id ,result)=>{
    dbConn.query("SELECT * FROM notice WHERE id=? " ,[id], (err , res )=>{
    if(err)
    {
        console.log("error while fetching   Notice By Id");
        result(null , err);
    }
    else{
         console.log(res);
         result(null , res);  
       
     }
  })
 }

module.exports= Notice;