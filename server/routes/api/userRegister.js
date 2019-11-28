const express = require('express');
const router = express.Router();
const Patient = require('../../model/register');

// @type                POST
// @route               /api/register/userRegister
// @description         This route contains user registration

router.post('/userRegister',(req,res)=>{
    const newPatient = new Patient({
        username:req.body.username,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    });
    newPatient.save()
        .then(patientInfo=>{
            if(!patientInfo)
            return res.status(404).json({"error":"patient data not stored"});
            console.log(patientInfo);
            res.status(200).json({"success":"patient data stored successfully"});
        })
        // if error is occured
        .catch(err => console.log(err));
});

module.exports = router;