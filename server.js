const http = require('http')
const path = require('path')
const fs = require('fs')

const getContentType = function (filePath) {
    let extn = path.extname(filePath)
    if (extn === '.js') {
        return 'text/javascript'
    } else if (extn === '.css') {
        return 'text/css'
    } else if (extn === '.html') {
        return 'text/html'
    } else if (extn === '.htm') {
        return 'text/htm'
    } else if (extn === '.jpg') {
        return 'image/jpg'
    } else if (extn === '.png') {
        return 'image/png'
    } else if (extn === '.jpeg') {
        return 'image/jpeg'
    } else if (extn === '.ico') {
        return 'image/x-icon'
    } else if (extn === '.svg') {
        return 'image/svg+xml'
    }
}

const server = http.createServer(function (req, res) {
    // const notFound = path.join(__dirname, 'public', 'notFound.html')
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    let contentType = getContentType(filePath)

    fs.readFile(filePath, function (err, data) {
        if (err) throw err
        res.writeHead(200, {'content-type': contentType})
        res.end(data)
    })
})

const port = 2040
const ip_address = '127.0.0.1'

server.listen(port, ip_address)

console.log(`Server is up and running on http://${ip_address}:${port}`)