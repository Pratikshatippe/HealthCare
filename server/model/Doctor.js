const mongoose = require('mongoose');

//schema for doctor 
const doctorSchema = new mongoose.Schema({
    Name:{
        type:String,
        required: true,
    },
    Designation:{
        type:String,
        required:true
    },
    Experience:{
        type:String,
        required:true
    },
    Degree:{
        type:String,
        required:true
    },
    CabinNO:{
        type:String,
        required:true
    }
});

doctorSchema.set('collection','doctorInfo');

module.exports = Doctor = mongoose.model('doctorInfo',doctorSchema);