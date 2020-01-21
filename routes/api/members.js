const express = require("express");
const mysql = require("mysql");
const router = express.Router();

// Create MySQL Server Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kblair_2612",
  database: "personal_project"
});

// Since we include '/api/members' in index.js using app.get(); we change it in this file to '/'

// This route gets all members:
router.get("/", (request, response) => {
  var q = "SELECT * FROM members";
  db.query(q, function(error, result) {
    if (error) throw error;
    let allMembers = result;
    response.json(allMembers);
  });
});

// This route gets a single member:
router.get("/:id", (request, response) => {
  let id = process.argv[2]; // pass argument to query
  let q = "SELECT * FROM members WHERE id =" + `${id}`;
  db.query(q, function(error, result) {
    if (error) throw error;
    let uniqueMember = result;
    response.json(uniqueMember);
  });
});
//   const found = members.some(
//     member => member.id === parseInt(request.params.id)
//   );

//   if (found) {
//     response.json(
//       members.filter(member => member.id === parseInt(request.params.id))
//     );
//   } else {
//     response.status(400).json({
//       message: `There isn't a member with the ID of ${request.params.id}`
//     });
//   }
// });

// This route creates a member:
router.post("/", (request, response) => {
  const newMember = {};
});

// db.end();

module.exports = router;
