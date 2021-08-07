const express=require('express');
const router=express.Router();
const test=require('../model/test');

router.get("/",async(req,res)=>{
    //res.send("hello Bros my home page");
    const allData=await test.find();
    //console.log(allData);
    res.render('index',{blog:allData});
})

module.exports=router;