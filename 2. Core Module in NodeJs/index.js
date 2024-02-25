//Path Module: 
const path=require('path');
const My_path='F:\Node js in Bengali\3. Core Module\index.js';
console.log(path.basename(My_path)); //Here we can see in which path we are warking.
console.log(path.dirname(My_path)); // Here we can see in which drive our code folder executed.
console.log(path.extname(My_path)); //Here it return the file extension name. 
console.log(path.parse(My_path)); //Return my folder all details .

//OS MOdule:
const os=require('os');
console.log(os.platform()) //Return the machne Bit
console.log((os.homedir())); //Return the home derectory 
console.log(os.freemem()); //Free memory
console.log(os.hostname()) // return the host name 
console.log(os.networkInterfaces()); //Return the network interface 
console.log(os.version()) //Return the operating System version.
console.log(os.release()); //Return the releaase of the OS in market
console.log(os.type()); //Return the type 
console.log(os.tmpdir()); //Return the temporary directory.

//Fs Module:
const fs=require('fs')
fs.writeFileSync('HeyFam.txt',"Hello Coders") //Here We Can create a new File using fs module
fs.appendFileSync('HeyFam.txt',"\nNew Text")  //Here New Text are append in this file.
const readthefile=fs.readFileSync('HeyFam.txt');
console.log(readthefile.toString());// to read the file content with synchronous way

fs.readFile('HeyFam.txt',(err,data)=>{
    console.log(data.toString()); //to read the file content with asynchronous way

})
fs.rename('HeyFam.txt','HeyCoders')

//Events Module:
const EventEmitter=require('events'); //EventEmitter is a class
const emitter=new EventEmitter() 
//Registe the event
emitter.on('Goal',(number)=>{
    console.log(`Let Play and Congraz the Team and the Player. ${number}.`); //Using parameaters
})
//Raise the event
emitter.emit('Goal','This is First Gooal') //Emit can use to retuen the emitter value.(Same as EventListener in JS)


