#!/usr/bin/node
var express=require('express');
var fs=require('fs');
var app=express.createServer(express.logger());

buf = new Buffer(fs.readFileSync('index.html'));
app.get('/', function(request, response) {
    response.send(buf.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
