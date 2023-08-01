require('dotenv').config();
const Sequelize  = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel=require("./models/User.js")
const PromoModel=require("./models/Promo.js")
const PizzaCreadaModel=require("./models/PizzaCreada.js")
const IngredienteModel=require("./models/Ingrediente.js")
const PedidoModel=require("./models/Pedido.js")
const PreciosModel=require("./models/Precios.js")

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trattopizza`,
 { logging: false, native: false });

//función de los modelos.
PreciosModel(sequelize);
UserModel(sequelize);
PromoModel(sequelize);
PizzaCreadaModel(sequelize);
IngredienteModel(sequelize);
PedidoModel(sequelize);
//Relacion de Modelos
const { User, Promo , PizzaCreada,Ingrediente, Pedido ,Precios} = sequelize.models;
// Relación uno a uno entre Ingrediente y Precio
Ingrediente.hasOne(Precios, { foreignKey: 'ingredienteId' });
Precios.belongsTo(Ingrediente, { foreignKey: 'ingredienteId' });

Promo.hasOne(Precios, { foreignKey: 'PromoId' });
Precios.belongsTo(Promo, { foreignKey: 'PromoId' });

User.belongsToMany(Pedido, { through: 'Pedidos_User', foreignKey: 'userId' });
Pedido.belongsToMany(User, { through: 'Pedidos_User', foreignKey: 'pedidoId' });

Ingrediente.belongsToMany(Pedido, { through: 'Añadidos_User', foreignKey: 'añadidoId' });
Pedido.belongsToMany(Ingrediente, { through: 'Añadidos_User', foreignKey: 'pedidoId' });

PizzaCreada.belongsToMany(Ingrediente, { through: 'Pizza_Creada_Usuario', foreignKey: 'creadaId' });
Ingrediente.belongsToMany(PizzaCreada, { through: 'Pizza_Creada_Usuario', foreignKey: 'ingredienteId' });

Promo.belongsToMany(Pedido, { through: 'Pedidos_Promo_Normales', foreignKey: 'promoId' });
Pedido.belongsToMany(Promo, { through: 'Pedidos_Promo_Normales', foreignKey: 'pedidoPromoId' });

PizzaCreada.belongsToMany(Pedido, { through: 'Pedidos_Pizza_Creada', foreignKey: 'pizzaCreadaId' });
Pedido.belongsToMany(PizzaCreada, { through: 'Pedidos_Pizza_Creada', foreignKey: 'pedidoPizzaCreadaId' });

module.exports = {
   User,
   Promo,
   PizzaCreada,
   Ingrediente,
   Pedido,
   Precios,
   conn:sequelize,
};
