// var http = require('http')
// var url = require('url')
// var fs = require('fs')

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true)
//     var filename = q.pathname === '/' ? './index.html' : '.' + q.pathname
//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         fs.readFile('./404.html', function (err, data) {
//           if (err) {
//             res.writeHead(404, { 'Content-Type': 'text/html' })
//             return res.end('404 Not Found')
//           }
//           res.writeHead(404, { 'Content-Type': 'text/html' })
//           res.write(data)
//           return res.end()
//         })
//       } else {
//         res.writeHead(200, { 'Content-Type': 'text/html' })
//         res.write(data)
//         return res.end()
//       }
//     })
//   })
//   .listen(8080)

const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '/about.html'))
})

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '/contact.html'))
})

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/404.html'))
})

app.listen(3000, () => {
  console.log('Server started')
})
