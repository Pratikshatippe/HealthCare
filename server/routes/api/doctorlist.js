const express = require('express');
const router = express.Router();
const Doctor = require('../../model/doctor');

//@type             GET
//@route            /api/userinfo/doctor
//@description      This route for fetch doctor list

router.get('/doctor',(req, res) =>{
    Doctor.findOne({})
    .then(result=>{
        console.log(result);
        res.send(result);
    })
})

module.exports = router;