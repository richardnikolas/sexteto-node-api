import { DataTypes } from 'sequelize';
import database from "../db";

export const Empresa = database.define('Empresa', {
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
    mensagemEmail: DataTypes.STRING,
    assuntoEmail: DataTypes.STRING
});
