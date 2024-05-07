import { Model, DataTypes } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    return super.init(
      {
        email: {
          type: DataTypes.STRING(100),
          unique: true,
          allowNull: false,
        },
        pw: {
          type: DataTypes.STRING(64),
          allowNull: false,
        },
        nick: {
          type: DataTypes.STRING(30),
          unique: true,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "User",
        tableName: "user",
        underscored: true,
        timestamps: true,
        paranoid: true,
      }
    );
  }

  static associate({ User, Board }) {
    User.hasMany(Board);
    Board.belongsTo(User);
  }
}
