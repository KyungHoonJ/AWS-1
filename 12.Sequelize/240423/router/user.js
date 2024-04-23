const router = require("express").Router();
const { UserCrypto, UserInfo, sequelize } = require("../models");

// localhost:8800/api/user/test POST
router.post("/test", async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const userId = "test1",
      pw = "qwer",
      phone = "123-4567-1234",
      name = "방지완";
    // nick = "무념무상";
    await UserCrypto.create({ userId, pw, phone }, { transaction });
    // await UserInfo.create({ name, nick: null }, { transaction });
    await UserInfo.create({ name }, { transaction });
    await transaction.commit();
  } catch (err) {
    console.error(err);
    await transaction.rollback();
  }
  res.send("ok");
});

router.post("/test2", async (req, res) => {
  try {
    await sequelize.transaction(async (transaction) => {
      const userId = "test2",
        pw = "qwer",
        phone = "123-4567-1234",
        name = "이정배",
        nick = "햄스터";
      await UserCrypto.create({ userId, pw, phone }, { transaction });
      // await UserInfo.create({ name, nick: null }, { transaction });
      await UserInfo.create({ name, nick }, { transaction });
    });
  } catch (err) {
    console.error(err);
  }
  res.send("ok");
});

router.get("/test", async (req, res) => {
  //   res.send([...(await UserCrypto.findAll()), ...(await UserInfo.findAll())]);
  res.send(
    await UserCrypto.findAll({
      where: {},
      attributes: ["userId", "phone"],
      include: [
        {
          model: UserInfo,
          attributes: ["name", "nick"],
        },
      ],
    })
  );
});

module.exports = router;
