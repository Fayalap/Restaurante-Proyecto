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
          imagen_url: {
            type: DataTypes.STRING,
            allowNull: false
          },
          precio_total:{
            type: DataTypes.FLOAT,
            allowNull: false
          }
          
     },);
  };
  