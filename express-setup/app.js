console.log("everything was a success")


const http = require('http')

const server = http.createServer((req,res)=> {
    console.log("user hit the server")
    // signal that the communication is over
    res.end('home page')
})

server.listen(5000)