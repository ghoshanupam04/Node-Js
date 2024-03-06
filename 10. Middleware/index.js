//Create Middleware and Test That:
const express=require('express');
const fs=require('fs');
const app=express();
const data=require('./MOCK_DATA.json');
const port=3000;

//Middleware:
app.use(express.urlencoded({extended:false}));
//Create a Middleware 1:
app.use((req,res,next)=>{
    console.log("Hello, This is Middleware 1"); 
    //return res.json({msg:`Hello, I am a Hacker`});// In this case that is show on postman but data's are not.
    next(); // If we use next then the next was run other wise not run
})
app.use((req,res,next)=>{
    console.log("Hello From Middleware 2");
    return res.json({msg:`Hey`});
})

//Get Request:
app.get('/',(req,res)=>{
    return res.json(data)
})

//Route:
app.route('/api/info/:id')
.get((req,res)=>{
    const id=Number(req.params.id);
    const user=data.find((user)=> user.id===id);
    return res.json(user)
})
.patch((req,res)=>{
    return res.json({Status:`Pending`})
})
.delete((req,res)=>{
    return res.json({Status:`Pending`})
})

//Post Request:
app.post('/api/info',(req,res)=>{
    const body=req.body;
    data.push({...body, id:body.listen+1});
    fs.appendFile('./MOCK_DATA.json', JSON.stringify(data),(err,result)=>{
        return res.json({Status:`Successfully Register`,id:body.listen+1})
    })

})

//Port Connection
app.listen(port,(req,res)=>{
    console.log(`On ${port} Server Properly Connected.`);
})
