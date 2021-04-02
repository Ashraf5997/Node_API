const express = require('express');
const router  = express.Router(); 


const AttendanceController = require('../controllers/attendance.controller');

//get all  attendence
router.get('/attendances',AttendanceController.getAttendanceList);

//create attendance

router.post('/createAttendance',AttendanceController.createAttendance);

//get Attendance id
router.get('/attendanceById/:id', AttendanceController.getAttendanceById);

//delete Attendeance by id
router.delete('/deleteAttendanceById/:id',AttendanceController.deleteAttendanceById);

//finds duplicate entry Attendeance by id
router.post('/dateToday',AttendanceController.dateToday);

//get Days from month
router.post('/getDaysByMonth',AttendanceController.getDaysByMonth);

module.exports = router;