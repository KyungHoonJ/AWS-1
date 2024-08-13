import { Sequelize } from "sequelize-typescript";
import { config } from "dotenv";

config();

const sequelize = new Sequelize({
  dialect: "mysql",
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: 3333,
});

export default sequelize;
