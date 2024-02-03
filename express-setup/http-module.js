console.log("everything was a success")


const http = require('http')
const { readFileSync } = require('fs');

const homePage = readFileSync('./index.html')

const server = http.createServer((req,res)=> {
    console.log("user hit the server")

    // request url
    const url = req.url;

    if(url === '/'){
        // passing response data
        res.writeHead(200, {"content-type":"text/html"})

        // passing the data
        res.write(homePage)
        // signal that the communication is over
        res.end();
    }else if(url === '/about'){
        // passing response data
        res.writeHead(200, {"content-type":"text/html"})

        // passing the data
        res.write('<h1>about page</h1>')
        // signal that the communication is over
        res.end()
    }else{
        // passing response data
        res.writeHead(404, {"content-type":"text/html"})

        // passing the data
        res.write('<h1>page not found</h1>')
        // signal that the communication is over
        res.end()
    }
})

server.listen(5000)