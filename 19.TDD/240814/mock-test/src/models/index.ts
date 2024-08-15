import sequelize from "./database";
import Todo from "./Todo";

sequelize.addModels([Todo]);

export default sequelize;
