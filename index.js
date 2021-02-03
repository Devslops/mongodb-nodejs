const express = require('express')
let app = express()
const router = require('./router.js')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/', router)


app.listen(3000, 'localhost', () => {
    console.log("Serveur on sur le port 3000")
})