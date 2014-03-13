var express = require("express");

var server = express(),
port = process.env.PORT || 8085;

server.use(express.compress());
server.use(express.static(__dirname + "/docs"));
server.listen(port);

console.log("listening on port %d", port);
