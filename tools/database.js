const Sequelize = require("sequelize");

const DB_NAME = "node_todo";
const DB_USERNAME = "root";
const DB_PASSWORD = "root";

const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: "localhost",
  dialect: "sqlite",
  storage: "db/db.sqlite",
});
module.exports = sequelize;
