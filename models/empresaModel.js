import { Sequelize, Model, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory');

export const Empresa = sequelize.define('Empresa', {
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
    assuntoEmail: DataTypes.STRING,
    mensagemSms: DataTypes.STRING,
    horarioIntegracao: { 
        type: DataTypes.STRING,
        allowNull: false
    },
});
