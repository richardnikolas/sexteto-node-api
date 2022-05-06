import { DataTypes } from 'sequelize';
import database from "../db";

export const Titulo = database.define('Titulo', {
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
