//Require Modules:
const express=require('express');
const app=express();
const mongoose=require('mongoose');
const port=3000;
const userRouter=require('./Routs/user')
const connect_with_mongodb=require('./Connection')

//Middleware - Plugins:
app.use(express.urlencoded({extended:false})); 

//Connect With MongoDb Server:
connect_with_mongodb('mongodb://127.0.0.1:27017/Fake-Database-2');

//Routs:
app.route('/api/user',userRouter);

//Connect With Port:
app.listen(port,()=>{
    console.log(`On ${port}, Server properly Start.`);
})
