const fs=require('fs');
const http=require('http');
const { resetWatchers } = require('nodemon/lib/monitor/watch');

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello");
    }else if(req.url=="/jsonapideb"){
        fs.readFile("../jsonMod/chap.json","UTF-8",(error,data)=>{
           console.log(data);
           res.end(data);
        });
    }
});


server.listen(4521,()=>{
    console.log("Server is running fine at port 4521!!!");
});