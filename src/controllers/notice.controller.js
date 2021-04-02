//const Employee = require('../models/employee.model');
const notice = require('../models/notice.nodal');
const NoticeModel  =  require('../models/notice.nodal');

// get all todo list 
exports.getAllNotice = (req , res)=>{
   // res.send("Here is list of data");
    NoticeModel.getAllNotice((err, notice)=>{

            if(err){
                res.send(err);
            }

            if(notice == "")
            {  
                console.log('Empty Database ' , notice);
                res.json({status: 404 , message :'Empty Notice', })   
            }

            if(notice !=""){
               console.log('notice' , notice);
               res.send(notice);
            }
    })
}


// create Notice 
exports.createNotice =(req , res )=>{
    const noticeReqData  = new  NoticeModel(req.body);
    console.log( "noticereqData :" , noticeReqData);
    // check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
        NoticeModel.createNotice(noticeReqData , (err , notice)=>{
            if(err){
                console.log("Error : ",err);
                res.send(err);
            }if(notice){
                 console.log("Notice  created succesfully");
                 res.json({success : 200 , message : ' Notice created successfully ' , id: notice.insertId});
            }    
        });
   }
}


// Update Notice
exports.updateNotice =(req , res )=>{
    const  noticeReqData  = new  NoticeModel(req.body);
    console.log("notice update :", noticeReqData);
    if(req.body.contructor === Object && Object.keys(req.body).length === 0)
    {
        res.send(400).send({success : 400, message : 'Please provide data properly'});
    }
    else
    {
         console.log("updated  notice data");
         NoticeModel.updateNotice(req.params.id , noticeReqData , (err , notice)=>{
         if(err){
            res.send(err);
         }
         else{
            if(notice =""){
                 res.json({success : 400 , message : 'Notice not found' , userId: notice.insertId});  
            }else{
                res.json({success : 200 , message : 'Notice updated successfully ' , userId: notice.insertId});  
                }
         } 
        });
    }
} 

// delete Notice
exports.deleteNotice =(req , res )=>{
    const  noticeReqData = new NoticeModel(req.body);
    console.log( "NoticeReqData delete" , noticeReqData);
        console.log("delete  data");
        NoticeModel.deleteNotice(req.params.id  , (err , notice)=>{
            if(err){
                res.send(err);
                res.json({success : 0 , message : ' Error while deleting Notice ' , userId: notice.insertId});   
            }else{
           
            res.json({ success : 200 , message : ' Notice deleted successfully' , userId : notice.insertId})
            }
        });
  //  }
} 

//  get Notice By Id
exports.getNoticeById =(req , res )=>{
    const  noticeReqData = new NoticeModel(req.body);
    console.log( "NoticeReqData delete" , noticeReqData);
        console.log("delete  data");
        NoticeModel.getNoticeById(req.params.id  , (err , notice)=>{
            if(err){
                res.send(err);
                res.json({success : 0 , message : ' Error while Fetching  Notice By Id '});   
            }else{
                if(notice == ""){
                    res.json({success : 404 , message : 'Notice not found' });  

                 }else{
                    res.send(notice); 

                  }
            }
        });
} 


