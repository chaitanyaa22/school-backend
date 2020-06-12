var studentModel = require('../models/student.model')

module.exports.logIn = async function (req, res){
    let student = await studentModel.findOne({phone: req.body.phone})
    if(student != null){
        if(req.body.otp == 12345){
            res.status(200).send(student) // Student Login successful
        }
        else{
            res.status(401).send("Incorrect OTP") //Wrong OTP
        }
    }
    else{
        res.status(404).send('Student Not Found') //Student not found
    }
}