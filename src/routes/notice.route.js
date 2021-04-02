
const express = require('express');
const router  = express.Router(); 

const NoticeController = require('../controllers/notice.controller');

//get all  notice
router.get('/notices',NoticeController.getAllNotice);

//create notice
router.post('/createNotice',NoticeController.createNotice);

//get  Notice By Id
router.get('/notice/:id', NoticeController.getNoticeById);

//update task
router.put('/updateNotice/:id',NoticeController.updateNotice);

//delete Notice
router.delete('/deleteNotice/:id',NoticeController.deleteNotice);
module.exports = router;