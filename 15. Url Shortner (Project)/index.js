//Require Modules:
const express=require('express');
const app=express();
const URLRoute=require('./Route/user');
const{ConnectMongoDb}=require('./connection');

//Middleware - Plugins:
app.use(express.json())

//Connect with MongoDb Server
ConnectMongoDb('mongodb://127.0.0.1:27017/URL-SHORT-MAKE')
.then(()=>console.log(`MongoDb Server Properly Start.`))

//Router:
app.use('/url',URLRoute)

//Connect with the Port
app.listen(8000,()=>{
    console.log(`On 8000 Port, Server Successfully Connected`);
})