//Require Modules:
const express = require('express');
const path=require('path');
const { ConnectMongoDb } = require('./Connection');
const UrlRoute = require('./Route/user');
const StaticRouter=require('./Route/StaticRouter');
const {URL}=require('./Model/user');
const PORT = 9696;
const app = express();

//Use EJS
app.set('view engine', 'ejs');
app.set('views',path.resolve('./View'))

//Middleware - Plugins
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Router:
app.use('/',StaticRouter)

app.use('/url', UrlRoute);

app.get('/test',async(req,res)=>{
    const allUrl=await URL.find({})
    return res.render('home',{
        urls:allUrl
    })
})

//Connect MongoDb Server:
ConnectMongoDb('mongodb://127.0.0.1:27017/PROJECT-URL_SHORT_NER')
    .then(() => console.log(`MongoDb Server Connect Properly.`))
    .catch((err) => console.log(`A Error Found On The Server.`))

//Connect with the Port:
app.listen(PORT, () => {
    console.log(`On ${PORT}, Server Properly Start.`);
})
