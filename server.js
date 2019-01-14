const http = require("http");
const io = require("socket.io");

const server = http.createServer((req,res)=>{
    // res.setHeader('Access-Control-Allow-Origin',req.headers['origin']);
    if(req.headers['origin'] == 'http://localhost'){
        res.setHeader('Access-Control-Allow-Origin','http://localhost');
        res.setHeader('Access-Control-Max-Age',3628800);
    }
    
    console.log(req.headers['origin']);
    res.end();
});

server.listen(8080);

const webSocketServer = io.listen(server);

webSocketServer.on("connection",(socket)=>{
    socket.on("a",(n1,n2)=>{
        console.log(`${n1},${n2}`);
    });
});

