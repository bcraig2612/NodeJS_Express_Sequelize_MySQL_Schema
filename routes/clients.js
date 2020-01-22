const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Client = require("../models/Client");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Get client list
router.get("/", (req, res) =>
  Client.findAll()
    .then(clients =>
      res.render("clients", {
        clients
      })
    )
    .catch(err => console.log(err))
);

// Display add client form
router.get("/add", (req, res) => res.render("add"));

// Add a client
router.post("/add", (req, res) => {
  let {
    name,
    eyelash_length,
    eyelash_type,
    price_per_fill,
    price_per_full,
    phone_number,
    email
  } = req.body;
  let errors = [];

  // Validate Fields
  if (!name) {
    errors.push({ text: "Please add a title" });
  }
  if (!eyelash_length) {
    errors.push({ text: "Please add an eyelash length" });
  }
  if (!eyelash_type) {
    errors.push({ text: "Please add an eyelash type" });
  }
  if (!price_per_fill) {
    errors.push({ text: "Please add a price for a fill" });
  }
  if (!price_per_full) {
    errors.push({ text: "Please add a price for a full set" });
  }
  if (!phone_number) {
    errors.push({ text: "Please add a contact phone number" });
  }
  if (!email) {
    errors.push({ text: "Please add a contact email" });
  }

  // Check for errors
  if (errors.length > 0) {
    res.render("add", {
      errors,
      name,
      eyelash_length,
      eyelash_type,
      price_per_fill,
      price_per_full,
      phone_number,
      email
    });
  } else {
    if (!price_per_fill) {
      price_per_fill = "Unknown";
    } else {
      price_per_fill = `$${price_per_fill}`;
    }

    // Make lowercase and remove space after comma
    name = name.toLowerCase();

    // Insert into table
    Client.create({
      name,
      eyelash_length,
      eyelash_type,
      price_per_fill,
      price_per_full,
      phone_number,
      email
    })
      .then(client => res.redirect("/clients"))
      .catch(err => console.log(err));
  }
});

// Search for gigs
router.get("/search", (req, res) => {
  let { term } = req.query;

  // Make lowercase
  term = term.toLowerCase();

  Client.findAll({ where: { name: { [Op.like]: "%" + term + "%" } } })
    .then(clients => res.render("clients", { clients }))
    .catch(err => console.log(err));
});

module.exports = router;
