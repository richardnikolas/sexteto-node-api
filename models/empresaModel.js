const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');
const { defaultModelFieldValidation } = require('../util/functions');

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
        unique: true,
        validate: defaultModelFieldValidation('Favor fornecer cpfcnpj')
    },
    nomeEmpresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nomeRepresentante: DataTypes.STRING,
    emailRepresentante: DataTypes.STRING,
    mensagemEmail: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: defaultModelFieldValidation('Favor fornecer mensagemEmail')
    },
    assuntoEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: defaultModelFieldValidation('Favor fornecer assuntoEmail')
    }
});

module.exports = Empresa;
