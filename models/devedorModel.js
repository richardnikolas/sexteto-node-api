import { DataTypes } from 'sequelize';
import database from "../db";

export const Devedor = database.define('Devedor', {
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
    telefone: DataTypes.STRING,
    ddd: DataTypes.STRING,
    cnpjEmpresa: DataTypes.STRING
});
