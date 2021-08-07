const express=require('express');
const router=express.Router();
const Blog=require('../model/test');
const mongoose=require('mongoose');

// Blog Part
router
.get('/blog/:id',async(req,res)=>{
    try{
        const ID= req.params.id; 
        //var ip= mongoose.Types.ObjectId(ID);
        const getinfo=await Blog.findOne({_id:ID});
        //res.send(getinfo);
        res.render("sepinfo",{blog:getinfo});
        
    }
    catch(err){
        res.end();
        console.log('url is not correct');
    }
})
// Updation Part
.get('/update/:id',async(req,res)=>{
        const ID= req.params.id; 
        //var ip= mongoose.Types.ObjectId(ID);
        const getinfo=await Blog.findOne({_id:ID});
        //res.send(getinfo);
        res.render("updateinfo",{blog:getinfo});
})

.post('/update/:id',(req,res)=>{
    const ID= req.params.id; 
    const {title,content,url}=req.body;
    Blog.updateOne({_id:ID},{title,content,url})
    .then(()=>{
        console.log("Sucessfull Updated");
        res.redirect('/');
    })
    .catch(err=>console.log(err));
})

module.exports=router;