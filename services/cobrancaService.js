const Devedor = require('../models/devedorModel');
const Titulo = require('../models/tituloModel');
const MessageService = require('./messageService');
const DiasAtrasoService = require('./diasAtrasoService');

const executeCobrancaEmpresa = async (empresa) => {
    const devedores = await Devedor.findAll({
        where: { cnpjEmpresa: empresa.cpfcnpj }
    });

    devedores.forEach(devedor => {
        executeCobrancaDevedor(empresa, devedor); 
    });
}

const executeCobrancaDevedor = (empresa, devedor) => {
    const titulos = await Titulo.findAll({
        where: { cpfcnpj: devedor.cpfcnpj }
    });

    let mediaDiasAtraso = DiasAtrasoService.calcularMediaDiasAtraso(devedor, titulos);

    titulos.forEach(titulo => {
        let dataCobranca = getDataCobranca(titulo, mediaDiasAtraso);
        if(isToday(dataCobranca))
            executeCobrancaTitulo(empresa, devedor, titulo);
    });
}

const executeCobrancaTitulo = (empresa, devedor, titulo) => {
    let messageText = MessageService.composeMessage(empresa, devedor, titulo);
    //TODO: Cobrança aqui
}

const getDataCobranca = (titulo, mediaDiasAtraso) => {
    return titulo.dataVencimento.addDays(-mediaDiasAtraso);
}

module.exports = { executeCobrancaEmpresa };