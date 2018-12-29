const http = require("http");
const io = require("socket.io");

const server = http.createServer((req,res)=>{
});

server.listen(8080);

const webSocketServer = io.listen(server);

webSocketServer.on("connection",(socket)=>{
    socket.on("a",(n1,n2)=>{
        console.log(`${n1},${n2}`);
    });
});
