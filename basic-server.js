// A BASIC Node server

const http = require('http');

const server = http.createServer(function(req, res) {
    res.setHeader('Content-type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200); // HTTP 200 status code (OK)

    let dataObj = { 'id': 123, 'name': 'Bob', 'email': 'bob@work.org' };
    let data = JSON.stringify(dataObj);
    res.end(data);
});

server.listen(1234, function() {
    console.log('Listening on port 1234');
});