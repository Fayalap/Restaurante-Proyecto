const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('PizzaCreada', {
        id:{
           type:DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement: true
        },
        ingredientes:{
            type: DataTypes.ARRAY(DataTypes.INTEGER)
        },
     }, { timestamps: false });
  };
  