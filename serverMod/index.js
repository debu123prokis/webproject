const http=require('http');

const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h1>Homepage</h1>");
    }else if(req.url=="/about"){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end("<h1>About page</h1>");
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.end("<h1>Error page</h1>");
    }
});


server.listen(4521,()=>{
    console.log("Server is running fine at port 4521!!!");
});