var express = require('express');
var router = express.Router();

var adminContoller = require('../controllers/admin.controller')
var studentController = require('../controllers/student.controller')
var teacherController = require('../controllers/teacher.controller')
var parentController = require('../controllers/parent.controller')


router.post('/admin/signup', adminContoller.signUp);
router.post('/admin/login', adminContoller.logIn)
router.post('/admin/addstudent', adminContoller.addStudent)
router.post('/admin/addteacher', adminContoller.addTeacher)
router.get('/admin/getdata', adminContoller.getData)

router.post('/student/login', studentController.logIn)

router.post('/teacher/login', teacherController.logIn)

router.post('/parent/login', parentController.logIn)

module.exports = router;
