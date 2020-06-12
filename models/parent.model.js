const mongoose = require('mongoose')
const parentSchema = mongoose.Schema({
    id: {type: Number},
    name: { type: String },
    email: { type: String},
    phone: { type: String}
})

module.exports = mongoose.model('parent', parentSchema);
