//Require Modules:
const express = require('express');
const app = express();
const fs = require('fs');
const data = require('./MOCK_DATA.json')
const port = 3000;

//Middleware - Plugins
app.use(express.urlencoded({ extended: false }));

//Get Request:
app.get('/', (req, res) => {
    return res.json(data);
})

//Route:
app.route('/api/info/:id')
    .get((req, res) => {
        const id = Number(req.params.id);
        const user = data.find((user) => user.id === id);
        if(!user){
            return res.status(404).json({msg:`User Not Found.`})
        }
        return res.json(user);
    })
    .patch((req, res) => {
        return res.status(205).json({ msg: `Pending` });
    })
    .delete((req, res) => {
        return res.status(202).json({ msg: `Pending` });
    })


//Post Request:
app.post('/', (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.email || !body.address){
        return res.status(400).json({msg:`Bad Request, Please Fill Up All those.`})
    }
    data.push({ ...body, id: data.length + 1 });
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(data), (result, err) => {
        return res.status(201).json({ msg: `Successfully Registered`, id: data.length + 1 })
    })
})
//Connect With The Server with Port Number:
app.listen(port, () => {
    console.log(`On ${port}, Server Properly Connect.`);
})