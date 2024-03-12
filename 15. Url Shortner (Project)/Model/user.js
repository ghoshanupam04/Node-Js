const mongoose=require('mongoose');

const User_schema=new mongoose.Schema({
    shortId:{
        type:String,
        required:true,
        unique:true,
    },
    RedirectURL:{
        type:String,
        required:true,
    },
    VisitHistory:[{timestamp:{type:Number}}],
},{timestamps:true})

//Model:
const URL=mongoose.model('url',User_schema)

module.exports={
    URL
}