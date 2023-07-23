const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('Pizza', {
        id:{
           type:DataTypes.INTEGER,
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
     }, { timestamps: false });
  };
  