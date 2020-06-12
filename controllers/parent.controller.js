var studentModel = require('../models/student.model')

module.exports.logIn = async function (req, res){
    let children = await studentModel.find({parentPhone: req.body.parentPhone})
    if(children.length > 0){
        if(req.body.otp == 12345){
            res.status(200).send(children) // Student Login successful
        }
        else{
            res.status(401).send("Incorrect OTP") //Wrong OTP
        }
    }
    else{
        res.status(404).send('Parent Not Found') //Student not found
    }
}
