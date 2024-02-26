const  http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        try{
            const data=fs.readFileSync('FileSystem/first.txt','utf8');
            res.end('File content: '+data);
        }
        catch(err)
        {
            console.error(err);
            res.end('Server error');
        }
    }
}).listen(3000);
