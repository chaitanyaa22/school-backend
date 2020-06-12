var adminModel = require('../models/admin.model')
var studentModel = require('../models/student.model')
var teacherModel = require('../models/teacher.model')
var bcrypt = require('bcrypt')


module.exports.signUp = async function (req, res) {
    let admin = await adminModel.findOne({
        email: req.body.email
    })
    if (admin == null) {
        let hashPassword = await bcrypt.hashSync(req.body.password, 10);
        adminModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPassword
        }, function (err, result) {
            if (err) {
                console.log(err)
            } else {
                res.status(201).send(result) //Admin Registered
            }
        })

    } else {
        res.status(409) //Already Exists
    }
}

module.exports.logIn = async function (req, res) {
    let admin = await adminModel.findOne({
        email: req.body.email
    })
    if (admin != null) {
        let pass = await bcrypt.compareSync(req.body.password, admin.password);
        if (pass) {
            let students = await studentModel.find()
            let teachers = await teacherModel.find()            
            res.status(200).send({students: students, teachers: teachers}) //Admin Logged in
        } else {
            res.status(401).send('Incorrect Password') //Incorrect Password
        }
    } else {
        res.status(404).send('Admin not found') //admin not found
    }
}

module.exports.addStudent = async function (req, res) {
    let student = await studentModel.findOne({phone: req.body.phone})
    if (student == null) {
        studentModel.create({
            name: req.body.name,
            phone: req.body.phone,
            class: req.body.class,
            section: req.body.section,
            rollNo: req.body.rollNo,
            parentName: req.body.parentName,
            parentPhone: req.body.parentPhone
        }, function(err, result){
            if(err){

            }
            else{
                res.status(200).send(result) //Student Added
            }
        })
    }
    else{
        res.status(409).send('Student Already Exists') //Student Already Exists
    }
}

module.exports.addTeacher = async function (req, res) {
    let teacher = await teacherModel.findOne({email: req.body.email})
    if (teacher == null) {
        let teacherPassword = req.body.name.toLowerCase().split(" ")[0].concat(req.body.subject.toLowerCase())
        teacherModel.create({
            name: req.body.name,
            email: req.body.email,
            password: teacherPassword,
            subject: req.body.subject
        }, function(err, result){
            if(err){

            }
            else{
                res.status(200).send(result) //Teacher Added
            }
        })
    }
    else{
        res.status(409).send('Teacher Already Exists') //Teacher Already Exists
    }
}

module.exports.getData = async function  (req, res){
    let students = await studentModel.find()
    let teachers = await teacherModel.find()
    res.send({students: students, teachers: teachers})
}

