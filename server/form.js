// const http=require('http');
// const fs=require('fs');
// const path=require('path');
// const querystring=request('querystring');

// // Creating Server
// const server = http.createServer((req,res)=>{
//     if(req.url="/" && req.method=="GET"){
//         const filePath=path.join(__dirname,'form.html');
//         fs.readFile('filePath','utf8',(err,data)=>{
//             if(err){
//                 console.error(err);
//                 res.end("Server error");
//                 return;
//             }
//             res.end(data);
//         });
//     }
//     else if(req.url=="/save-json" && req.method=="POST"){
//         let body=' ';
//         req.on('data',(chunk)=>{
//             body +=chunk;
//         });
//         req.on('end',()=>{
//             const jsonData=querystring.parse(body).jsonData;
//             const jsonString = JSON.stringify(JSON.parse(jsonData))
//         });
//     }
//     const jsonString = JSON.stringify(JSON.parse(jsonData));
//     // Write JSON data to a file
//     fs.writeFile('FileSystem/output.json', jsonString, 'utf8', (err) => {
//     if (err) {
//     console.error(err);
//     res.writeHead(500, { 'Content-Type': 'text/plain' });
//     res.end('Internal Server Error');
//     return;
//     }
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('JSON data successfully saved to output.json');
//     });
//     });
    
//     else {
//         // Handle other routes (if any)
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Not Found');
//         }
//         });
//         const port = 3000;
//         server.listen(port, () => {
//         console.log(`Server is running on http://localhost:${port}`);
//         });
        

const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

// Creating Server
const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
        const filePath = path.join(__dirname, 'form.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                res.end("Server error");
                return;
            }
            res.end(data);
        });
    }
    else if (req.url === "/save-json" && req.method === "POST") {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk;
        });
        req.on('end', () => {
            const jsonData = querystring.parse(body).jsonData;
            const jsonString = JSON.stringify(JSON.parse(jsonData));

            // Write JSON data to a file
            fs.writeFile('FileSystem/output.json', jsonString, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                    return;
                }
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('JSON data successfully saved to output.json');
            });
        });
    }
    else {
        // Handle other routes (if any)
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
 