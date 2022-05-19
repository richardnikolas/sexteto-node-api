const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const Empresa = sequelize.define('empresa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpfcnpj: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    nomeEmpresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeRepresentante: DataTypes.STRING,
    emailRepresentante: DataTypes.STRING,
    mensagemEmail: DataTypes.STRING(1000),
    assuntoEmail: DataTypes.STRING
});

module.exports = Empresa;
