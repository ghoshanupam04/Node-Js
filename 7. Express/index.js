//Express
const express=require('express');  //require the express
const app=express(); // initialize 

//Handlers Declare
app.get('/', (req,res)=>{
    return res.send('Hello Community, This is Home Page.');
})
app.get('/about', (req,res)=>{
    return res.send('Hey There, I am Anupam the Backend Developer.'+'hello '+ req.query.name);
})

app.listen(3000,()=>{  //port 3000 and we not use http module 
    console.log('Server Connected Successfully');
})
