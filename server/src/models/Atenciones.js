const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Atenciones', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
         
         contraseña: {
            type: DataTypes.STRING,
            allowNull: false,

         }
        })}