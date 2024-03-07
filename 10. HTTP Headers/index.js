//Require Modules:
const express = require('express');
const app = express();
const fs = require('fs');
const port = 9999;
const data = require('./MOCK_DATA.json');

//Middleware - Plugins:
app.use(express.urlencoded({ extended: false }));
/*app.use((req,res,next)=>{
    console.log("This Is Middleware1 ");
    //return res.json({msg:`Hello Your Server Was Hacked...`});
    next();
})
app.use((req,res,next)=>{
    console.log("This Is Middleware 2 ");
    return res.json({msg:`Hello Your Server Was Hacked...`});
    next();
})*/
//Get Requiest:
app.get('/', (req, res) => {
    res.setHeader('My-Name','Anupam Ghosh')// Set a header when get request occured
    return res.json(data);
})

//Routs:
app.route('/api/info/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = data.find((user) => user.id === id);
        return res.json(user);
    })

    .patch((req, res) => {
        return res.json({ msg: `Pending` });
    })
    .delete((req, res) => {
        return res.json({ msg: `Pending` });
    })

//Post Request:
app.post('/', (req, res) => {
    console.log(req.headers);
    const body = req.body;
    console.log('Body: ',body);
    data.push({...body, id:data.length+1});
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data),(result,err)=>{
        return res.json({msg:`Successfully Registered`,id:data.length+1 })
    })
})


//Connect With Port and Start Ther Server:
app.listen(port, () => {
    console.log(`On ${port}, Server Properly Start`);
})