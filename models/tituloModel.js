import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory');

export const Titulo = sequelize.define('Titulo', {
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
        type: DataTypes.FLOAT,
        allowNull: false
    },
    dataVencimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pago: DataTypes.BOOLEAN,
    dataPagamento: DataTypes.STRING
});
