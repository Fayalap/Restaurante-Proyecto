const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('Pizza', {
        id:{
           type:DataTypes.INTEGER,
           allowNull:false,
           primaryKey:true,
           autoIncrement: true
        },
        nombre_pizza:{
           type:DataTypes.STRING,
           allowNull:false
        },
        descripcion:{
           type:DataTypes.STRING,
           allowNull:false
        },
        ingredientes:{
            type: DataTypes.STRING,
            allowNull: false
        },
        imagen_url: {
            type: DataTypes.STRING,
            allowNull: false
          },
        precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        }
     }, { timestamps: false });
  };
  