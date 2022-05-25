const Empresa = require('../models/empresaModel');
const CobrancaSerice = require('../services/cobrancaService');
const SendMailService = require('../services/sendMailService');

const executeCobrancaParaEmpresa = async (req, res) => {
    try {
        const { cpfcnpj, useApi } = req.body;

        console.log("req.body", req.body);

        const empresa = await Empresa.findOne({
            where: { cpfcnpj: cpfcnpj }
        });

        await CobrancaSerice.executeCobrancaEmpresa(empresa, useApi);

        res.status(201).send('Cobranca Realizada');
    } catch (error) {
        res.status(500).send({
            message: error
        });
        console.error(error);
    }
}

const sendEmail = async (req, res) => {
    try {
        let message = req.body;
        SendMailService.sendMail(message);
        res.status(201).send('Email enviado');
    } catch (error) {
        res.status(500).send({
            message: error
        });
        console.error(error);
    }
}

module.exports = { executeCobrancaParaEmpresa, sendEmail }