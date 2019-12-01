const express = require('express');
const router = express.Router();
const Patient = require('../../model/register');

// @type                POST
// @route               /api/register/userRegister
// @description         This route contains user registration

router.post('/userRegister', async (req,res)=>{
    
    const newPatient = await new Patient({
        username:req.body.auth.username,
        password:req.body.auth.password,
        confirmPassword:req.body.auth.confirmPassword
    });
    let  reg = await newPatient.save();
    console.log(reg);
});

router.get('/login',  (req, res)=>{
    console.log("login");
    Patient.find({})
        .then(info=>{
            res.send(info);
        });
});

module.exports = router;