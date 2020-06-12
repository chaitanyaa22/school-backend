const mongoose = require('mongoose')
const studentSchema = mongoose.Schema({
    name: { type: String },
    phone: { type: Number},
    class: { type: String},
    section: {type: String},
    rollNo: {type: Number},
    parentName: {type: String},
    parentPhone: {type: Number}
})

module.exports = mongoose.model('student', studentSchema);
