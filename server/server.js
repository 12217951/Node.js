const http = require('http');
const server= http.createServer((req,res)=>{
    res.end("Hello!");
});
const port = 3000;
server.listen(port,()=>console.log(`Server is running o http://localhost:${port}`));