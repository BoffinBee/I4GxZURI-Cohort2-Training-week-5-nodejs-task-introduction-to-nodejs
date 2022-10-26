const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('IF YOU SEE ME, SERVER IS UP!')
})

server.listen(2040, '127.0.0.1')

console.log("Server is up and running!")