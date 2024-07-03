import { Sequelize, Options } from "sequelize";
import mysqlConfig from "../../config/mysql.json";
import Todo from "./Todo";

const config: Options = mysqlConfig.development as Options;

export const sequelize = new Sequelize(config);
Todo.initialize(sequelize);

export { Todo };
