const mongoose = require('mongoose');

// schema for patient diseases

const diseaseSchema = new mongoose.Schema({
    diseaseName:{
        type:String,
        required:true
    },
    Remark:{
        type:Number,
        required:true
    }
});

module.exports = Disease = mongoose.model('diaseases', diseaseSchema);