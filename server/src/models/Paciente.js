const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Paciente', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
         nombre: {
            type: DataTypes.STRING,
            allowNull: false
         },
         apellido: {
            type: DataTypes.STRING,
            allowNull: false
         },
         fecha_de_nacimiento: {
            type: DataTypes.STRING,
            allowNull: false,
            isDate: true,
         },
         sexo: {
            type: DataTypes.STRING,
            allowNull: false
         },
         tipo_de_documento: {
            type: DataTypes.STRING,
            allowNull: false
         },
         numero_de_documento: {
            type: DataTypes.STRING,
            allowNull: false
         },
         pais_de_origen: {
            type: DataTypes.STRING,
            allowNull: false
         },
         barrio: {
            type: DataTypes.STRING,
            allowNull: false
         },
         domicilio: {
            type: DataTypes.STRING,
            allowNull: false
         },
         telefono: {
            type: DataTypes.STRING,
            allowNull: false
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
         },
         contrasena: {
            type: DataTypes.STRING,
            allowNull: false
         }
        })}