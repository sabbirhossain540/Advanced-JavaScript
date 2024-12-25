const http = require('http');
const server = http.createServer((req, res) => {
   res.writeHead(200, {
       'Content-Type': 'application/json'
   });
   res.end('Hello World');
});

server.listen(3000, () =>{
    console.log('Server started on port 3000');
});