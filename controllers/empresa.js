const Empresa = require('../models/empresaModel');

//* GET *//

const getAllEmpresas = async (req, res) => {
    const empresas = await Empresa.findAll();

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

    if (empresa !== null) {
        res.status(200).send(empresa);
    } else {
        res.status(404).send({ message: 'Nenhuma Empresa encontrada com este CPF/CNPJ.' });
    }
};

//* POST *//

const createEmpresa = async (req, res) => {
    const {
        cpfcnpj,
        nomeEmpresa,
        nomeRepresentante,
        emailRepresentante,
        mensagemEmail,
        assuntoEmail
    } = req.body;

    try {
        await Empresa.create({
            cpfcnpj,
            nomeEmpresa,
            nomeRepresentante,
            emailRepresentante,
            mensagemEmail,
            assuntoEmail
        });

        res.status(201).send({ message: 'Empresa criada com sucesso!' });
    } catch (error) {
        res.status(500).send({
            message: error
        });
        console.error(error);
    }
};

//* VIEWS *//

const novaEmpresa = async (req, res) => {
    res.render('empresa/novaEmpresa');
};

const novaEmpresaSuccess = async (req, res) => {
    res.render('empresa/novaEmpresaSuccess');
};

module.exports = {
    getAllEmpresas,
    getEmpresa,
    novaEmpresa,
    createEmpresa,
    novaEmpresaSuccess
};
