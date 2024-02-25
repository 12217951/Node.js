const http=require('http');
const fs= require('fs');
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
        fs.readFile('FileSystem/first.txt','utf8',(err,data)=>{
            if(err){
            console.error(err);
            return;
            }
            // res.writeHead(200,{'content-Type':'text/plain'});
            res.end('File content: '+data);
        })
    }
}).listen(3000,()=>console.log(`Server is running on http://localhost:3000`));