const Devedor = require('../models/devedorModel');

//* GET *//

const getAllDevedores = async (req, res) => {
    const devedores = await Devedor.findAll();

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

    if (devedor !== null) {
        res.status(200).send(devedor);
    } else {
        res.status(404).send({ message: 'Nenhum Devedor encontrado com este CPF/CNPJ.' });
    }
};

const getDevedoresEmpresa = async (req, res) => {
    const { cnpjEmpresa } = req.params;

    const devedores = await Devedor.findAll({
        where: {
            cnpjEmpresa: cnpjEmpresa
        }
    });

    if (devedores.length > 0) {
        res.status(200).send(devedores);
    } else {
        res.status(404).send({ message: 'Não foi encontrado nenhum devedor para esta empresa.' });
    }
};

//* POST *//

const createDevedor = async (req, res) => {
    const { cpfcnpj, nome, email, cnpjEmpresa } = req.body;

    try {
        const newDevedor = await Devedor.create({
            cpfcnpj: cpfcnpj.replace(/[\/.-]/g, ''),
            nome,
            email,
            cnpjEmpresa
        });

        res.status(201).send(newDevedor);
    } catch (error) {
        res.status(500).send({ message: 'Algum erro inesperado ocorreu ao tentar criar Devedor' });
        console.error(error);
    }
};

module.exports = {
    getAllDevedores,
    getDevedor,
    getDevedoresEmpresa,
    createDevedor
};
