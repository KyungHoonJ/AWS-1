// Sequelize : DB를 연결할 때 유용하게 사용할 수 있는 라이브러리
//   - sequelize와 함께 쓰는 mysql 라이브러리는 'mysql2'이다.
require("dotenv").config();

const { sequelize, Sequelize, User } = require("./models");

(async () => {
  await sequelize.sync({ force: true });
  console.log("access db");
  // await User.create({
  //   userId: "test",
  //   name: "test",
  //   password: "test",
  // });
  // for (let i = 0; i < 100; i++) {
  //   await User.create({
  //     userId: "test" + i,
  //     name: "test" + i,
  //     password: "test",
  //   });
  // }

  // const list = await User.findAndCountAll({
  //   where: { name: { [Sequelize.Op.like]: "test_1" } },
  //   limit: 3,
  //   offset: 3,
  // });
  // // test11, test21, test31, test41, test51, ...
  // console.log(list.rows[0].name);
  // console.log(list.rows[2].name);
  // console.log(list.rows[3]);
  // console.log(list.count);
})();
