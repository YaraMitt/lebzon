var express = require("express");
  var app = express(express.logger());


var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";

//* var app = express.createServer(express.logger());

app.get('/', function(request, response) {
   var dindex = fs.readFileSync('index.html','utf8');
  response.send(dindex.toString('utf-8'));
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
