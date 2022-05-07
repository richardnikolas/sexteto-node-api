const Titulo = require('../models/tituloModel');

//* GET *//

const getAllTitulos = async (req, res) => {
    const titulos = await Titulo.findAll();

    if (titulos.length > 0) {
        res.status(200).send(titulos);
    } else {
        res.status(404).send({ message: 'Não encontramos nenhum Título cadastrado' });
    }
};

const getTitulosPorDevedor = async (req, res) => {
    const { cpfcnpj } = req.params;

    const titulos = await Titulo.findAll({
        where: {
            cpfcnpj: cpfcnpj
        }
    });

    if (titulos.length > 0) {
        res.status(200).send(titulos);
    } else {
        res.status(404).send({
            message: 'Não encontramos nenhum Título cadastrado para este CPF/CNPJ'
        });
    }
};

//* POST *//

const createTitulo = async (req, res) => {
    const { cpfcnpj, valor, codigoDeBarras, dataVencimento } = req.body;

    try {
        const newTitulo = await Titulo.create({
            cpfcnpj,
            valor,
            codigoDeBarras,
            dataVencimento
        });

        res.status(201).send(newTitulo);
    } catch (error) {
        res.status(500).send({ message: 'Algum erro inesperado ocorreu ao tentar criar Titulo' });
        console.error(error);
    }
};

module.exports = {
    getAllTitulos,
    getTitulosPorDevedor,
    createTitulo
};
