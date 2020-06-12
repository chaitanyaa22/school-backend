var teacherModel = require('../models/teacher.model')

module.exports.logIn = async function (req, res){
    let teacher = await teacherModel.findOne({email: req.body.email})
    if(teacher != null){
        if(req.body.password == teacher.password){
            res.status(200).send(teacher) // teacher Login successful
        }
        else{
            res.status(401).send("Incorrect Password") //Wrong Password
        }
    }
    else{
        res.status(404).send('Teacher Not Found') //Teacher not found
    }
}