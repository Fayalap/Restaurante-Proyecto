const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('PizzaCreada', {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement: true
         },
         precio:{
            type: DataTypes.FLOAT,
            allowNull: false
        }
     },);
  };
  