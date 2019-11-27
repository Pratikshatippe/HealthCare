const mongoose = require('mongoose');

const UserInfoSchema = new.mongoose.Schema({
    username:{
        type:String,
        required: true,
    },
    password:{
        type:any,
        required:true
    },
    confirmPassword:{
        type:any,
        required:true
    }
});

module.exports = patient = mongoose.model('registration',UserInfoSchema);