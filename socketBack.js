const http = require('http');
const fs = require('fs');
const io = require('socket.io');
const mysql = require('mysql');

let httpServer = http.createServer((req,res)=>{
    fs.readFile(`www${req.url}`,(err,data)=>{
        if(err){
            res.writeHead(404);
            res.write('Not found');
        }else{
            res.write(data);
        }
        res.end();
    })
});
httpServer.listen(8080,()=>{console.log("Server is running in 8080");});

let websocketServer = io.listen(httpServer);

websocketServer.on('connection',function(sock){
    // sock.on("a",function(num1,num2){
    //     console.log(`num1:${num1},num2:${num2}`);
    // });
    setInterval(()=>{sock.emit("name",Math.random()+"lapXK");},2000);
    
});