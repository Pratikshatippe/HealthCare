const mongoose = require('mongoose');

const UserInfoSchema = new mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }
});

module.exports = Patient = mongoose.model('registration',UserInfoSchema);