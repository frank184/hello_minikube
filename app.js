var http = require('http')

var handler = function(req, res) {
  console.log('Received connection for ' + req.url)
  res.writeHead(200)
  res.end('Hello World, how are you?')
}

var server = http.createServer(handler)

server.listen(3000)
console.log('[*] Listening...')
