//Rest Api
const express = require('express');
const data = require('./MOCK_DATA.json');
const fs = require('fs')
const app = express();
const port = 3000;

//Handel Request:
app.get('/api/users', (req, res) => {
    return res.json(data); //get all the data
})

//Dynamic Paths:
app.get('/api/users/:id',(req,res)=>{
    const id =Number(req.params.id);
    const user=data.find((user)=>user.id===id);
    return res.json(user)
})

app.listen(port, () => {
    console.log(`Server Start with port no: ${port}`);
})