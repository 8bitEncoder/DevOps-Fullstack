const http = require('http');
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello from Node ' + process.version + ' inside a Container!\n');
});
server.listen(5020, () => console.log('Server on 5020'));
