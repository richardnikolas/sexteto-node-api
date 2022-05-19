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
        validate: defaultModelFieldValidation('Please provide cpfcnpj')
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
        validate: defaultModelFieldValidation('Please provide mensagemEmail')
    },
    assuntoEmail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: defaultModelFieldValidation('Please provide assuntoEmail')
    }
});

module.exports = Empresa;
