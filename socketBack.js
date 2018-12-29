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

websocketServer.on('connection',function(socket){
    socket.on("reg",(user,password)=>{
        if(!regs.username.test(user)){
            socket.emit("reg_ret",1,"用户名不符合规范");
        }else if(!regs.password.test(password)){
            socket.emit("reg_ret",1,"密码不符合规范");
        }else{
            de.query(`select id from user_table where username = ${user}`,(err,data)=>{
                if(err){
                    socket.emit('reg_ret',1,'数据库错误');
                }else if(data.length > 0){
                    socket.emit("reg_ret",1,"用户名已存在");
                }else{
                    de.query(`insert into user_table (username,password,online) values(${user},${password},0)`,(err)=>{
                        if(err){
                            sock.emit('reg_ret',1,'数据库错误');
                        }else{
                            sock.emit('reg_ret',0,'注册成功');
                        }
                    });
                }
            });
        }
    });
    setInterval(()=>{socket.emit("name",Math.random()+"lapXK");},2000);
    
});