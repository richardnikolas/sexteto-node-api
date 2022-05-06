const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/db');

const Titulo = sequelize.define('titulo', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cpfcnpj: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    codigoDeBarras: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataVencimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pago: DataTypes.BOOLEAN,
    dataPagamento: DataTypes.STRING
});

module.exports = Titulo;
