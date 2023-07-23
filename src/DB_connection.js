require('dotenv').config();
const Sequelize  = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel=require("./models/User.js")
const PizzaModel=require("./models/Pizza.js")
const PizzaCreadaModel=require("./models/PizzaCreada.js")
const IngredienteModel=require("./models/Ingrediente.js")
const PedidoModel=require("./models/Pedido.js")
const PreciosModel=require("./models/Precios.js")

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trattopizza`,
 { logging: false, native: false });

//función de los modelos.
PreciosModel(sequelize);
UserModel(sequelize);
PizzaModel(sequelize);
PizzaCreadaModel(sequelize);
IngredienteModel(sequelize);
PedidoModel(sequelize);
//Relacion de Modelos
const { User, Pizza , PizzaCreada,Ingrediente, Pedido ,Precios} = sequelize.models;
// Relación uno a uno entre Ingrediente y Precio
Ingrediente.hasOne(Precios, { foreignKey: 'ingredienteId' });
Precios.belongsTo(Ingrediente, { foreignKey: 'precioIdIngrediente' });

Pizza.hasOne(Precios, { foreignKey: 'PizzaId' });
Precios.belongsTo(Pizza, { foreignKey: 'precioId' });

User.belongsToMany(Pedido, { through: 'Pedidos_User', foreignKey: 'userId' });
Pedido.belongsToMany(User, { through: 'Pedidos_User', foreignKey: 'pedidoId' });

Ingrediente.belongsToMany(Pedido, { through: 'Añadidos_User', foreignKey: 'añadidoId' });
Pedido.belongsToMany(Ingrediente, { through: 'Añadidos_User', foreignKey: 'pedidoId' });

PizzaCreada.belongsToMany(Ingrediente, { through: 'Pizza_Creada_Usuario', foreignKey: 'creadaId' });
Ingrediente.belongsToMany(PizzaCreada, { through: 'Pizza_Creada_Usuario', foreignKey: 'ingredienteId' });

Pizza.belongsToMany(Pedido, { through: 'Pedidos_Pizza_Normales', foreignKey: 'pizzaId' });
Pedido.belongsToMany(Pizza, { through: 'Pedidos_Pizza_Normales', foreignKey: 'pedidoPizzaId' });

PizzaCreada.belongsToMany(Pedido, { through: 'Pedidos_Pizza_Creada', foreignKey: 'pizzaCreadaId' });
Pedido.belongsToMany(PizzaCreada, { through: 'Pedidos_Pizza_Creada', foreignKey: 'pedidoPizzaCreadaId' });

module.exports = {
   User,
   Pizza,
   PizzaCreada,
   Ingrediente,
   Pedido,
   Precios,
   conn:sequelize,
};
