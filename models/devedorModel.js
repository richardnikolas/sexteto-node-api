const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const Devedor = sequelize.define('devedor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpfcnpj: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    cnpjEmpresa: DataTypes.STRING
});

module.exports = Devedor;
