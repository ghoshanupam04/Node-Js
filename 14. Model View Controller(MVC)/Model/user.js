const mongoose=require('mongoose');
const user_Schema=new mongoose.Schema({
    Name:{
        type:String,
        require:true,
    },
    Email:{
        type:String,
        require:true,
        unique:true,
    },
    Gender:{
        type:String,
        require:true,
    },
    Address:{
        type:String,
        require:true,
    },
},{timestamps:true});

//Module:
const User=mongoose.model('user',user_Schema);

module.exports=User;