const sequelize = require('../db');

const {DataTypes} = require('sequelize');

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, unique: false},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
});

const Basket = sequelize.define('basket',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true}
});

const BasketHistory = sequelize.define('basket_history',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true}
});

const History = sequelize.define('history',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    name:{ type: DataTypes.STRING, unique: true, allowNull: false},
    rating:{type:DataTypes.INTEGER,defaultValue: 0},
    img:{type:DataTypes.STRING, allowNull: false}
});

const Autor = sequelize.define('autor',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    name:{ type: DataTypes.STRING, unique: true, allowNull: false}
});

const Type = sequelize.define('type',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    name:{ type: DataTypes.STRING, unique: true, allowNull: false}
});

const Rating = sequelize.define('rating',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    rate:{type: DataTypes.INTEGER, allowNull: false}
});

const HistoryInfo = sequelize.define('history_info',{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull: false},
    text:{type: DataTypes.STRING, allowNull:false}
});

const TypeAutor = sequelize.define("type_autor",{
    id:{type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true}
})

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketHistory);
BasketHistory.belongsTo(Basket);

Basket.hasMany(History);
History.belongsTo(Basket);

History.hasMany(Rating);
Rating.belongsTo(History);

History.hasMany(HistoryInfo, {as: 'info'});
HistoryInfo.belongsTo(History);

Type.hasMany(History);
History.belongsTo(Type);

Autor.hasMany(History);
History.belongsTo(Autor);

Autor.belongsToMany(Type,{through: TypeAutor});
Type.belongsToMany(Autor,{through: TypeAutor});


module.exports = {
    User,
    Basket,
    BasketHistory,
    History,
    Autor,
    Type,
    Rating,
    HistoryInfo,
    TypeAutor
};