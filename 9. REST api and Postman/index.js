//REST api and Postman
const express = require('express');
const app = express();
const port = 8000;
const data = require('./MOCK_DATA.json')
const fs = require('fs');

//Middleware - Plugins:
app.use(express.urlencoded({ extended: false }))

//Create a Get route 
app.get('/', (req, res) => {
    return res.json(data);
})

//Routs
app.route('/api/info/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = data.find((user) => user.id === id)
        return res.json(user);
    })
    .patch((req, res) => {
        return res.json({ Status: `Pending` });
    })
    .delete((req, res) => {
        return res.json({ Status: `Pending` });
    })

//Post Request
app.post('/api/info', (req, res) => {
    const body = req.body;
    console.log("Body: " , body);
    data.push({...body, id:data.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(data),(err,result)=>{
        return res.json({Status: "Successfully Registered",id:data.length+1 });
    })
})

//Connect with port:
app.listen(port, () => {
    console.log(`On ${port} Server Properly Connected.`);
})
