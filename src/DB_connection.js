require('dotenv').config();
const Sequelize  = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel=require("./models/User.js")
const PizzaModel=require("./models/Pizza.js")
const PizzaCreadaModel=require("./models/PizzaCreada.js")
const IngredienteModel=require("./models/Ingrediente.js")
const PedidoModel=require("./models/Pedido.js")


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/trattopizza`,
 { logging: false, native: false });

//función de los modelos.
UserModel(sequelize);
PizzaModel(sequelize);
PizzaCreadaModel(sequelize);
IngredienteModel(sequelize);
PedidoModel(sequelize);
//Relacion de Modelos
const { User, Pizza , PizzaCreada,Ingrediente, Pedido } = sequelize.models;

User.belongsToMany(Pedido, { through: 'Pedidos_User', foreignKey: 'userId' });
Pedido.belongsToMany(User, { through: 'Pedidos_User', foreignKey: 'pedidoId' });

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
   conn:sequelize,
};
