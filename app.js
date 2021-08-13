const express=require('express')
const mongoose=require('mongoose')
const home=require('./routes/index');
const add=require('./routes/add');
const blog=require('./routes/blog');
const app=express();
const port= process.env.PORT || 8000;

mongoose.connect("mongodb://localhost:27017/blog_app",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true
})
.then(()=> console.log("connect to mongodb........"))
.catch((err)=> console.log(err));



app.use(express.urlencoded({extended:true}));
// Built in middleware for static website
app.use(express.static("public"));
// To set the view engine ...
app.set('view engine','hbs');
app.use(home);
app.use(add);
app.use(blog);

app.listen(port,"127.0.0.1",()=>{
    console.log(`server Listen port ${port}:`);
});
