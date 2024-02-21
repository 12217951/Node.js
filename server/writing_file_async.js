const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        const message="This is Node.js Server!";
        fs.writeFile('FleSystem/first.txt',message,'utf8',(err)=>{
            if(err)
            {
                console.error(err);
                console.log("Server error");
            }
            res.end('File-content:'+message);
        })
    }

}).listen(3000,()=>console.log(`Server is running on http://3000`));