//Blocking Elements
const fs=require('fs');
fs.writeFile('Elements.txt',"This is a File System But here we can discuss about blocking and non Blocking Elements",(err,data)=>{
    console.log(data);
})
console.log("Hello Coders");
const resut=fs.readFileSync('Elements.txt','utf-8')
console.log(resut); //In blocking Element all are run with one by one structure way
console.log("Hello Coders Two");

//Non- Blocking Element:
console.log('one');
fs.readFile('Elements.txt','utf-8',(err,data)=>{
    console.log(data); //Here which was return first that always first return 
})
console.log("two");

