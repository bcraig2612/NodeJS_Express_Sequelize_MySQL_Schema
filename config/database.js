const Sequelize = require("sequelize");

module.exports = new Sequelize("codegig", "root", "Kblair_2612", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
