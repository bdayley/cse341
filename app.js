const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello');
    res.end();
  } else {
    res.write('Hi');
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000...')