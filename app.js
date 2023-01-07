const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Bozo T. Clown');
    res.end();
  } else {
    res.write('Somewhere out there...');
    res.end();
  }
});

server.listen(3000);
console.log('Listening on port 3000...')