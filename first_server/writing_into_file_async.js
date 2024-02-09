const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        const message = 'Hello, this is your node.js server!';

        // Write the message to a file asynchronously
        fs.writeFile('fileSystem/first.txt', message, 'utf8', (err) => {
            if (err) {
                console.error(err);
                res.writeHead(500, { 'Content-type': 'text/plain' });
                res.end("File writing operation encountered an error");
                return;
            }
            res.writeHead(200, { 'Content-type': 'text/plain' });
            res.end('File content: ' + message);
        });
    }
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
