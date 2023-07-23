const { DataTypes } = require('sequelize');

module.exports = (sequelize)=> {
    sequelize.define('Precios',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement: true
        },

        precio:{
            type: DataTypes.FLOAT,
            allowNull:false,
        }

    })
}
