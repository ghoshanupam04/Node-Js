//Http Web Server:
const http=require('http');
const fs=require('fs')
const MyServer=http.createServer((req,res)=>{  //Request and response handlers
    const data=`${Date.now()}, ${req.url}:New Request Receaved \n`
    fs.appendFile('ReceavedReq.txt',data,(err,result)=>{  //here we can store all the requests
        switch(req.url){ //Multy Route
            case '/': res.end('This is Home Page'); //use some condition
            break;
            case '/about': res.end('I am Anupam Ghosh And i create this server');
            break;
            default: res.end('Not yeate');
            break;    
        }
    })
    console.log('Request Reseaved'); //After reseaved it will show in terminal
})
const port=7999;
MyServer.listen(port,()=>{
    console.log("Server Start Properly");
})