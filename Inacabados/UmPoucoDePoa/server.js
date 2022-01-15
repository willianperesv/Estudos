const express = require('express')
const app = express()
const path = require('path')
const router = express.Router()
const bodyparser = require('body-parser')
const { static } = require('express')
app.use(bodyparser.urlencoded({extend: true}))



router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/about.html"))
})
router.get('/styles', function(req, res){
    res.sendFile(path.join(__dirname+"/stylesheet.css"))
})


 router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/index.html"))
})

app.get('/onloads', (req, res) => {
    res.send(onloads())
})

app.use(express.static(__dirname + "/"))
app.use('/', router)
app.listen(process.env.port || 3030)