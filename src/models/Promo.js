const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('Promo', {
        id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement: true
        },
        nombre_promo:{
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
        precio:{
         type: DataTypes.STRING,
         allowNull: false
     },
     }, { timestamps: false });
  };
  