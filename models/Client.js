const Sequelize = require("sequelize");
const db = require("../config/database");

const Client = db.define("client", {
  name: {
    type: Sequelize.STRING
  },
  eyelash_length: {
    type: Sequelize.STRING
  },
  eyelash_type: {
    type: Sequelize.STRING
  },
  price_per_fill: {
    type: Sequelize.INTEGER
  },
  price_per_full: {
    type: Sequelize.INTEGER
  },
  phone_number: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
});

module.exports = Client;
