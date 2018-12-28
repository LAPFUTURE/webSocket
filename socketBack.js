const http = require('http');
const io = require('socket.io');

let httpServer = http.createServer();
httpServer.listen(8080,function(){console.log("running");});

let websocketServer = io.listen(httpServer);

websocketServer.on('connection',function(sock){
    // sock.on("a",function(num1,num2){
    //     console.log(`num1:${num1},num2:${num2}`);
    // });
    setInterval(()=>{sock.emit("name",Math.random()+"lapXK");},2000);
    
});