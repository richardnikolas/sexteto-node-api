const Empresa = require('../models/empresaModel');

const getAllEmpresas = async (req, res, next) => {
    const empresas = await Empresa.findAll();

    console.log('empresas', empresas);

    if (empresas.length > 0) {
        res.status(200).send(empresas);
    } else {
        res.status(200).send({ message: 'Não encontramos nenhuma Empresa cadastrada' });
    }
};

module.exports = {
    getAllEmpresas
};
