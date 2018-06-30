const http = require('http');
const fs = require('fs')
const url = require('url');

const page = url.parse(req.url).pathname;


if (page == '/') {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}
server.listen(8080);
