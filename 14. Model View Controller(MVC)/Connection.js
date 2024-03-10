const mongoose=require('mongoose');
async function connect_with_mongodb(url){
    return mongoose.connect(url);
}
module.exports=connect_with_mongodb;