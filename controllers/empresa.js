const Empresa = require('../models/empresaModel');

//* GET *//

const getAllEmpresas = async (req, res) => {
    const empresas = await Empresa.findAll();

    console.log('empresas', empresas);

    if (empresas.length > 0) {
        res.status(200).send(empresas);
    } else {
        res.status(404).send({ message: 'Não encontramos nenhuma Empresa cadastrada.' });
    }
};

const getEmpresa = async (req, res) => {
    const { cpfcnpj } = req.params;

    const empresa = await Empresa.findOne({
        where: {
            cpfcnpj: cpfcnpj
        }
    });

    console.log('empresa', empresa);

    if (empresa !== null) {
        res.status(200).send(empresa);
    } else {
        res.status(404).send({ message: 'Nenhuma Empresa encontrada com este CPF/CNPJ.' });
    }
};

//* POST *//

module.exports = {
    getAllEmpresas,
    getEmpresa
};
