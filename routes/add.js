const express=require('express');
const router=express.Router();
const test=require('../model/test');
const isImageURL = require('valid-image-url');


router.get("/add",(req,res)=>{
    res.render('add');
})
// add part
.post("/add",(req,res)=>{
    const {title,content,url}=req.body;
    //if(isImageURL(url)){
    const datastore=new test({title,content,url});
    datastore.save()
    .then(()=>{
        console.log('data Saved');
        res.redirect('/');
    })
    .catch((err)=>{
        console.log(err);
    })
//}
// else{res.redirect('/add')}
})

module.exports=router;