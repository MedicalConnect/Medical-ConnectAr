const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('HistoriaClinica', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
            
        },
        medicalHistory: {
            type: DataTypes.STRING,
            allowNull: false

        },
        allergies: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false,
        },

        medicines: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: false
        },

        habits: {
            type: DataTypes.STRING,
            allowNull: false,
        },

     description: {
        type: DataTypes.STRING,
        allowNull: false
     },
     

    })}