const Sequelize = require("sequelize");

const sequelize = require("../tools/database");

const todo = sequelize.define("Todo", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  tytle: { type: Sequelize.STRING, allowNull: false },
});
module.exports = todo;
