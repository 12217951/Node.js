const http= require('http');
const fs=require('fs');
const server = http.createServer((req,res)=>{
    if(req.url=="/"){
    const message="Hello , this file is written using Sync!";
    try{
        fs.writeFileSync('FileSystem/first.txt',message,'utf8');
        res.end('File-content:'+message);
    }
    catch(err){
        console.error(err);
        res.end("Server Error");
    }
}
}).listen(3000,()=>console.log(`Server is running on http://localhost:3000`));
