const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const message = 'Hello, this is your node.js server!';

        fs.appendFile('fileSystem/first.txt', message +'\n', 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-type': 'text/plain' });
                res.end("File writing operation encountered an error");
                return;
            }else{
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end('File content: ' + message);
            }
        });
    }
});

const port = 4000;
server.listen(port, ()=> console.log(`Server is running on http://localhost:${port}`));