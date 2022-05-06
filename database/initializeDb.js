const { sequelize } = require('./db');

const initiliazeDb = async () => {
    try {
        const Empresa = require('../models/empresaModel');
        const Titulo = require('../models/tituloModel');
        const Devedor = require('../models/devedorModel');

        const result = await sequelize.sync();

        console.log('result', result);
    } catch (error) {
        console.log('error', error);
    }
};

module.exports = { initiliazeDb };
