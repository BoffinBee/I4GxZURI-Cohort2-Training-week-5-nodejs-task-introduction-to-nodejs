const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer(function (req, res) {
    if (req.url === '/' || req.url == '/index.html') {
        let filePath = path.join(__dirname, 'public', 'index.html')
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data)
        })
    }

    if (req.url === '/contact.html') {
        let filePath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data)
        })
    }

    if (req.url === '/about.html') {
        let filePath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) throw err
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(data)
        })
    }

})

const port = 2040
const ip_address = '127.0.0.1'

server.listen(port, ip_address)

console.log(`Server is up and running on ${ip_address}:${port}`)