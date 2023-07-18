require('dotenv').config();
const Sequelize  = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel=require("./models/User.js")
const PizzaModel=require("./models/Pizza.js")
const PizzaCreadaModel=require("./models/PizzaCreada.js")
const IngredienteModel=require("./models/Ingrediente.js")
const PedidoModel=require("./models/Pedido.js")


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/tratto`,
 { logging: false, native: false });

//función de los modelos.
UserModel(sequelize);
PizzaModel(sequelize);
PizzaCreadaModel(sequelize);
IngredienteModel(sequelize);
PedidoModel(sequelize);
//Relacion de Modelos
const { User, Pizza , PizzaCreada,Ingrediente, Pedido } = sequelize.models;

PizzaCreada.belongsToMany(Ingrediente, { through: 'Pizza_Creada_Usuario', foreignKey: 'id' });
Ingrediente.belongsToMany(PizzaCreada, { through: 'Pizza_Creada_Usuario', foreignKey: 'ingrediente_id' });

Pizza.belongsToMany(Pedido, { through: 'Pedidos_PizzaNormales', foreignKey: 'id' });
Pedido.belongsToMany(Pizza, { through: 'Pedidos_PizzaNormales', foreignKey: 'pedido_id' });

PizzaCreada.belongsToMany(Pedido, { through: 'Pedidos_PizzaCreada', foreignKey: 'id' });
Pedido.belongsToMany(PizzaCreada, { through: 'Pedidos_PizzaCreada', foreignKey: 'pedido_id' });

module.exports = {
   User,
   Pizza,
   PizzaCreada,
   Ingrediente,
   Pedido,
   conn:sequelize,
};
