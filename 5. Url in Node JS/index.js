const http = require('http');
const fs = require('fs');
const url=require('url'); //import 
const port = 8000;

const MyServer = http.createServer((req, res) => {
    if(req.url==='/favicon.ico') return res.end(); //Not print anything
    const Data = `${Date.now()}: ${req.url} Request Received \n`;
    const MyUrl=url.parse(req.url,true);
    console.log(MyUrl);

    fs.appendFile('ServerData.txt', Data, (err, result) => {
        switch (MyUrl.pathname) {
            case '/':
                res.end('Hello There,\n Welcome to out Home Page.\nThank You For visiting us.');
                break;
            case '/about':
                const UserName=MyUrl.query.myname;  //user input and that is on output in the page 
                res.end(`Hey, I am ${UserName}`);
                break;
            case '/search':
                const Search=MyUrl.query.search_query;
                res.end(`You are Searching ${Search}`);
                break;
        }
    })
})

MyServer.listen(port, () => {
    console.log(`On ${port}, Server Connect Successfully.`);
})
