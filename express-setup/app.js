const express = require('express')
const path = require('path')
const app = express()

// working with static resources
app.use(express.static('./public'))

// app.get() method is used to send data to the client
app.get('/',(req,res)=> {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
    // res.status(200).send('Home Page')
})

// app.get() method is used to send data to the client
app.get('/about',(req,res)=> {
    res.send('About Page')
})

// app.all() method is used to send data to the client
app.all('*',(req,res)=> {
    res.send('<h1>Page not found</h1>')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000...')
})