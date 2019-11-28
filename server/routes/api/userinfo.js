const express = require('express');
const router = express.Router();
const Doctor = require('../../model/Doctor');

//@type             GET
//@route            /api/userinfo/doctor
//@description      This route for fetch doctor list

router.get('/doctor',(req, res) =>{
    Doctor.find({})
    .then(result=>{
        console.log("in doctor collection");
        console.log(result);
    })
})

module.exports = router;