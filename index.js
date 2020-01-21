// Allows Access To Using Express and its capabilities
const express = require("express");
const mysql = require("mysql");
const path = require("path");
const logger = require("./middleware/logger");
// Initialize Express
const app = express();

// Initialize middleware (Every time we make a request, the middleware function is ran!)
//Logger Middleware:
// app.use(logger);

// Initialize Body Parser Middleware:
// This allows us to use raw JSON data
app.use(express.json());

// This allows us to use data from the url for form submissions
app.use(express.urlencoded({ extended: false }));

// Create MySQL Server Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kblair_2612",
  database: "personal_project"
});

// Create your endpoints & route handlers

// Set a static folder:
app.use(express.static(path.join(__dirname, "public")));

// Members API Routes
app.use("/api/members", require("./routes/api/members"));

// Listen on a port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
