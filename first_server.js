var http = require("http");

//
var PORT = 7000;

//
function handleRequest(request, response) {
  //
  response.end("You look handsome today");
}

//
var server = http.createServer(handleRequest);

//
server.listen(PORT, function() {
 
    //
    console.log("Server 1 on Port " + PORT + " says you look handsome today!");
  
});

var http = require("http");

//
var PORT2 = 7500;

//
function handleRequest(request, response) {
  //
  response.end("This is some Horse Manure");
}

//
var server = http.createServer(handleRequest);

//
server.listen(PORT2, function() {
 
    console.log("Server 2 on Port " + PORT2 + " says you look ugly today!");
  
});
