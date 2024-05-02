const {Model} = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Todo extends Model{
        static init(){
            return super.init({
                content:{
                    type: DataTypes.STRING(50)
                },
                isComplete:{
                    type: DataTypes.BOOLEAN,
                    defaultValue: false
                }
            },
            {
                sequelize,
                underscored: true,
                paranoid: true,
                modelName: "Todo",
                tableName: 'todo',
                timestamps: true
            })
        }

        static associate(db){
            db.Todo.hasMany(db.Todo, {foreignKey:"todoId", sourceKey:'id'})
            db.Todo.belongsTo(db.Todo, {foreignKey:"todoId", targetKey:'id'})

            db.Todo.belongsTo(db.User, {foreignKey:"userId", targetKey:'id'})
        }
    }

    return Todo.init();
}