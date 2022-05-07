const Titulo = require('../models/tituloModel');

//* GET *//

const getAllTitulos = async (req, res) => {
    const titulos = await Titulo.findAll();

    console.log('titulos', titulos);

    if (titulos.length > 0) {
        res.status(200).send(titulos);
    } else {
        res.status(404).send({ message: 'Não encontramos nenhum Título cadastrado' });
    }
};

const getTitulosPorEmpresa = async (req, res) => {
    const { cpfcnpj } = req.params;

    const titulos = await Titulo.findAll({
        where: {
            cpfcnpj: cpfcnpj
        }
    });

    console.log('titulos', titulos);

    if (titulos.length > 0) {
        res.status(200).send(titulos);
    } else {
        res.status(404).send({
            message: 'Não encontramos nenhum Título cadastrado para este CPF/CNPJ'
        });
    }
};

//* POST *//

module.exports = {
    getAllTitulos,
    getTitulosPorEmpresa
};
