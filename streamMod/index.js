const http=require('http');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    // if(req.url=="/"){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     res.end("<h1>Its Homepage</h1>");
    // }else if(req.url=="/jsonapi"){
    //     res.writeHead(200,{'Content-Type':'text/html'});
    //     fs.readFile("chap.json","UTF-8",(error,data)=>{
    //         const objData=JSON.parse(data);
    //         console.log(objData);
    //     });
    // }

    const rstream=fs.createReadStream("chap.json");
    // rstream.on("data",(chunkdata)=>{
    //     res.write(chunkdata);
    // });
    // rstream.on("data",()=>{
    //     res.end();
    // });
    // rstream.on("error",(error)=>{
    //     console.log(error);
    // });

    rstream.pipe(res);
    
    
});


server.listen(4521,()=>{
    console.log("Server is running fine at port 4521!!!");
});