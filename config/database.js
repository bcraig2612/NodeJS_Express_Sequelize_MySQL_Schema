const Sequelize = require("sequelize");

module.exports = new Sequelize("lashes_with_kayy", "root", "Kblair_2612", {
  host: "localhost",
  dialect: "mysql",
  define: {
    timestamps: false
  },
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
