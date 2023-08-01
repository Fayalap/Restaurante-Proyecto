const { DataTypes } = require('sequelize');


module.exports =(sequelize)=>{
    sequelize.define('Ingrediente', {
        ingrediente_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          nombre_ingrediente: {
            type: DataTypes.STRING,
            allowNull: false
          }, precio:{
            type: DataTypes.STRING,
            allowNull: false
        },
          
        
     }, { timestamps: false });
  };
  