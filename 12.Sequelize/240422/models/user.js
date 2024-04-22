const Sequelize = require("sequelize");

module.exports = class User extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        userId: {
          type: Sequelize.STRING(50),
          allowNull: false,
          unique: true,
        },
        name: {
          type: Sequelize.STRING(10),
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING(64),
          allowNull: false,
        },
        age: {
          type: Sequelize.TINYINT.UNSIGNED,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        underscored: true,
      }
    );
  }

  static associate(db) {
    db.User.hasMany(db.Board, {
      sourceKey: "userId",
      //   foreignKey: "usersId",
      foreignKey: { name: "usersId", allowNull: false },
      onDelete: "cascade",
    });
    db.User.hasMany(db.Board, {});

    // N : M
    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "followerId", // column 명
      as: "follower", // sequelize가 사용하는 별칭
      //   sourceKey: "userId",
    });
    db.User.belongsToMany(db.User, {
      through: "follow",
      foreignKey: "followingId", // column 명
      as: "following", // sequelize가 사용하는 별칭
      //   sourceKey: "userId",
    });

    db.User.belongsToMany(db.Board, {
      through: "block",
      foreignKey: "userId", // column 명
      as: "user", // sequelize가 사용하는 별칭
      //   sourceKey: "userId",
    });
  }
};
