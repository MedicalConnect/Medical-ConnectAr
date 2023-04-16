const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Doctor', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            unique: true,
        },
         nombre: {
            type: DataTypes.STRING,
            allowNull: true
         },
         apellido: {
            type: DataTypes.STRING,
            allowNull: true
         },
         tipo_de_documento: {
            type: DataTypes.STRING,
            allowNull: true
         },
         numero_de_documento: {
            type: DataTypes.STRING,
            allowNull: true
         },
         fecha_de_nacimiento: {
            type: DataTypes.STRING,
            allowNull: true,
            isDate: true,
         },
         sexo: {
            type: DataTypes.STRING,
            allowNull: true
         },
         pais_de_origen: {
            type: DataTypes.STRING,
            allowNull: true
         },
         provincia: {
            type: DataTypes.STRING,
            allowNull: false
         },
         ciudad: {
            type: DataTypes.STRING,
            allowNull: true
         },
         nacionalidad: {
            type: DataTypes.STRING,
            allowNull: true
         },
         domicilio: {
            type: DataTypes.STRING,
            allowNull: false
         },
         titulo: {
            type: DataTypes.STRING,
            allowNull: true
         },
         institucion_de_titulacion: {
            type: DataTypes.STRING,
            allowNull: true
         },
         fecha_de_titulacion: {
            type: DataTypes.STRING,
            allowNull: true,
            isDate: true,
         },
         especilidad: {
            type: DataTypes.STRING,
            allowNull: true
         },
         numero_de_matricula: {
            type: DataTypes.STRING,
            allowNull: true,
            isNumeric: true
         },
         telefono: {
            type: DataTypes.STRING,
            allowNull: true,
            isNumeric: true
         },
         email: {
            type: DataTypes.STRING,
            allowNull: false,
            isEmail: true,
         },
         contraseña: {
            type: DataTypes.STRING,
            allowNull: true,

         }
        })}