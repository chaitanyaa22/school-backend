const mongoose = require('mongoose')
const teacherSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String},
    password: { type: String},
    subject: {type: String}
})

module.exports = mongoose.model('teacher', teacherSchema);
