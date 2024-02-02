console.log("everything was a success")


const http = require('http')

const server = http.createServer((req,res)=> {
    console.log("user hit the server")

    // passing response data
    res.writeHead(200, {"content-type":"text/html"})

    // passing the data
    res.write('<h1>homepage</h1>')
    // signal that the communication is over
    res.end()
})

server.listen(5000)