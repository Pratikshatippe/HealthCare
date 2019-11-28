const express = require('express');
const router = express.Router();
const Disease = require('../../model/diseases');

//@type       POST
//@route      /api/disease/disease
console.log("hello");
router.post('/disease',(req,res)=>{
    // console.log("here");
    const newDisease = new Disease({
        diseaseName:req.body.diseaseName,
        Remark:req.body.Remark
    });
    newDisease.save()
    .then(diseaseData=>{
        if(!diseaseData)
            return res.status(404).json({"error":"disease data not stored"});
            console.log(diseaseData);
            res.status(200).json({"success":"disease data stored successfully"});
    })
    // if error is occured   
    .catch(err => console.log(err)); 
});

module.exports = router;