// let mysql = require("mysql");

// Allows Access To Using Express and its capabilities
const express = require("express");

// Initialize Express
const app = express();

// Create your endpoints & route handlers
app.get("/", function(request, response) {
  response.send("HELLO!");
});

// Listen on a port
app.listen(3001, function() {
  console.log("App listening on port 3001!");
});
