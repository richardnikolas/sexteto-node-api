const Empresa = require('../models/empresaModel');
const CobrancaSerice = require('../services/cobrancaService');

const executeCobrancaParaEmpresa = (req, res) => {
    
    try {
        const { cpfcnpj } = req.body;
        const empresa = await Empresa.findOne({
            where: { cpfcnpj: cpfcnpj }
        });
        CobrancaSerice.executeCobrancaEmpresa(empresa);
        res.status(201).send('Cobranca Realizada');
    } catch (error) {
        res.status(500).send({
            message: error
        });
        console.error(error);
    }
}

module.exports = { executeCobrancaParaEmpresa }