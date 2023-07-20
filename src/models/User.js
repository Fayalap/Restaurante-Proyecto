const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         type:DataTypes.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement: true
      },
      email:{
         type:DataTypes.STRING,
         allowNull:false,
         isEmail: true
      },
      nombre:{
         type:DataTypes.STRING,
         allowNull:false,
      },
      contraseña:{
         type:DataTypes.STRING,
         allowNull:false,
      },
      confirmar:{
         type:DataTypes.STRING,
         allowNull:false,
      },
      direccion:{
         type:DataTypes.STRING,
         allowNull:false
      }
   }, { timestamps: false });

   
};
