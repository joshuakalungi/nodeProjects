// importing express module
const express = require('express')

// creating an instance of an express app
let app = express()

app.all('*', (req, res) => {
    res.send('Welcome to Practical Node.js!')
})

app.listen( 3000, () => {console.log('Open at localhost:3000')}
)