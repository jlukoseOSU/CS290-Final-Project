var path = require('path')
var express = require('express')
var { engine } = require('express-handlebars');
  
var app = express()
var port = process.env.PORT || 3000

app.listen(port, function () {
    console.log("== Server is listening on port", port)
})

