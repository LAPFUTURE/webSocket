const fs = require("fs");
fs.readFile("read.txt",(error,data)=>{
    if(error){
        console.log(`${error}`);
    }
    else{
        console.log(`${data}`);
    }
});

let content = "I am a student";
fs.writeFile("write.txt",content,(error)=>{
    if(error){
        console.log("error");
    }else{
        console.log("success");
    }
    
});
