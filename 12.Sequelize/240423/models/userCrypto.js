const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserCrypto extends Model {
    static init() {
      return super.init(
        {
          userId: {
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false,
          },
          pw: {
            type: DataTypes.STRING(64),
            allowNull: false,
          },
          phone: {
            type: DataTypes.STRING(13),
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING(100),
            unique: true,
          },
        },
        {
          sequelize,
          modelName: "UserCrypto",
          tableName: "user_crypto",
          paranoid: true,
          underscored: true,
        }
      );
    }

    static associate(db) {
      db.UserCrypto.hasOne(db.UserInfo, {
        foreignKey: "id",
        sourceKey: "id",
      });
    }
  }

  return UserCrypto.init();
};
