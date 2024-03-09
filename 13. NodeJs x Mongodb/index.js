//Require Modules:
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 8000;

//Middleware - Plugins
app.use(express.urlencoded({ extended: false }));

//Connect With MongoDB Server:
mongoose.connect('mongodb://127.0.0.1:27017/Fake-Database')
    .then(() => console.log(`MongoDB Server Properly Connected.`))
    .catch((err) => console.log(`A Error Has Found On the Server.`))

//Schema:
const User_Schema = new mongoose.Schema({
    Name: {
        type: String,
        require: true,
    },
    Email: {
        type: String,
        require: true,
        unique: true,
    },
    Gender: {
        type: String,
        require: true,
    },
    Address: {
        type: String,
        require: true,
    },
}, { timestamps: true })

//Model:
const User = mongoose.model('user', User_Schema);

// GET Request:
app.get('/', async (req, res) => {
    const all_Dd_user = await User.find({});
    return res.json(all_Dd_user);
})

//Routs:
app.route('/api/info/:id')
    .get(async (req, res) => {
        const search = await User.findById(req.params.id);
        if (!search) return res.status(404).json({ msg: `User Not Found.` });
        return res.json(search);
    })
    .patch(async (req, res) => {
        await User.findByIdAndUpdate(req.params.id,{Name:'Sayan Dopemon'});
        return res.status(205).json({ msg: `Update Successfully` });
    })
    .delete(async (req, res) => {
        await User.findByIdAndDelete(req.params.id);
        return res.status(202).json({ msg: `Successfully Deleted.` })
    })

//Post Request:
app.post('/', async (req, res) => {
    const body = req.body;
    if (!body || !body.Name || !body.Email || !body.Address || !body.Gender) {
        return res.status(400).json({ msg: `Please Fill All Properly.` })
    }
    const result = await User.create({
        Name: body.Name,
        Email: body.Email,
        Gender: body.Gender,
        Address: body.Address,
    })
    console.log(result);
    return res.status(201).json({ msg: `Successfully Registered` })
})

//Connect With The Port:
app.listen(port, () => {
    console.log(`On ${port},Server Properly Connected `);
})
