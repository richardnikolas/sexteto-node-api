import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory');

export const Devedor = sequelize.define('Devedor', {
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
