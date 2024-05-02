const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(
  config.database, // 사용할 database 명
  config.username, // username
  config.password, // password
  config
);

// const User = require("./user")(sequelize);
const User = require("./user").init(sequelize);
const Board = require("./board").init(sequelize);

const db = { sequelize, Sequelize, User, Board };

User.associate(db);
Board.associate(db);

module.exports = db;
