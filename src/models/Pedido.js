const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('Pedido', {
        pedido_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nombre_cliente: {
            type: DataTypes.STRING,
            allowNull: false
          },
          direccion_entrega: {
            type: DataTypes.STRING,
            allowNull: false
          },
          telefono_contacto: {
            type: DataTypes.STRING,
            allowNull: false
          },
          pizzas_id:{
            type: DataTypes.ARRAY(DataTypes.INTEGER),
            allowNull: false
          },
          añadidos:{
            type: DataTypes.ARRAY(DataTypes.INTEGER)
          }
          
     },);
  };
  