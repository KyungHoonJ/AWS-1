import Sequelize from "sequelize";
import mySQLConfig from "../config/config.json" assert { type: "json" };

import CategoryModel from "./board/category.js";
import BoardModel from "./board/board.js";
import UserModel from "./user/user.js";

const env = process.env.NODE_ENV || "development";
const config = mySQLConfig[env];

export const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

export const Category = CategoryModel.init(sequelize);
export const Board = BoardModel.init(sequelize);
export const User = UserModel.init(sequelize);

const db = { Category, Board, User };

Object.keys(db).forEach((model) => {
  db[model].associate(db);
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
