const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    age: {
        valueType: Number
    },
    gender: String,
    marital_status: String,
    role: String 
});

module.exports = mongoose.model('Staff', staffSchema);