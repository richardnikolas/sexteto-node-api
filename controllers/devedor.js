const Devedor = require('../models/devedorModel');

//* GET *//

const getAllDevedores = async (req, res) => {
    const devedores = await Devedor.findAll();

    console.log('devedores', devedores);

    if (devedores.length > 0) {
        res.status(200).send(devedores);
    } else {
        res.status(404).send({ message: 'Não encontramos nenhum Devedor cadastrado.' });
    }
};

const getDevedor = async (req, res) => {
    const { cpfcnpj } = req.params;

    const devedor = await Devedor.findOne({
        where: {
            cpfcnpj: cpfcnpj
        }
    });

    console.log('devedor', devedor);

    if (devedor !== null) {
        res.status(200).send(devedor);
    } else {
        res.status(404).send({ message: 'Nenhum Devedor encontrado com este CPF/CNPJ.' });
    }
};

//* POST *//

module.exports = {
    getAllDevedores,
    getDevedor
};
