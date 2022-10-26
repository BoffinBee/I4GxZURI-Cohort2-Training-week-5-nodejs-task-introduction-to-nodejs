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
    } else {
        return 'text/plain'
    }
}

const server = http.createServer(function (req, res) {
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const contentType = getContentType(filePath)
    const notFoundPage = path.join(__dirname, 'public', 'notFound.html')


    fs.readFile(filePath, function (err, data) {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(notFoundPage, function (err, content) {
                    res.writeHead(200, {'content-type': contentType})
                    res.end(content)
                })
            } else {
                res.writeHead(500)
                res.end("Server Error!")
            }
        }

        if (!err) {
            res.writeHead(200, {'content-type': contentType})
            res.end(data)
        }
    })
})

const port = 2040
const ip_address = '127.0.0.1'

server.listen(port, ip_address)

console.log(`Server is up and running on http://${ip_address}:${port}`)