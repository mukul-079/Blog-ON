const mongoose=require('mongoose');

// Create Schema
const testSchema= new mongoose.Schema({
    title : {
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    postedAt:{
        type:String,
        default:new Date().toLocaleString('en-US', {weekday:'long',day:'numeric',month:'long',year:'numeric',hour: 'numeric', minute: 'numeric'})
    }
}) 

module.exports = new mongoose.model("test", testSchema);