//Check the Methods:
const http=require('http');
const fs=require('fs');
const url=require('url');
const ServerPort =8000;

const MyServer=http.createServer((req,res)=>{
    if(req.url==='/favicon.ico') return res.end();
    const DataStore=`${Date.now()}, ${req.method} ${req.url} Request Received.\n`;
    const MyUrl=url.parse(req.url,true);
    console.log(MyUrl);
    fs.appendFile('ReceiveData.txt',DataStore,(result,err)=>{
        switch(MyUrl.pathname){
            case '/':
                res.end('Hello Community,\n This is Our Home Page');
                return;
            case '/about':
                const UserName= MyUrl.query.myname;
                res.end(`Hey There, I am ${UserName}.`);
                return;
                case '/search':
                const Search= MyUrl.query.search_query;
                res.end(`I am searching  ${Search}.`);
                return;
            default:
                res.end('404 Not Found');
                return;
        }
    })
})
MyServer.listen(ServerPort,()=>{
    console.log('Server Connected Successfully');
})