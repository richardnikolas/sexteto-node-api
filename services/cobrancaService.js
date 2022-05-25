const Devedor = require('../models/devedorModel');
const Titulo = require('../models/tituloModel');
const MessageService = require('./messageService');
const DiasAtrasoService = require('./diasAtrasoService');
const Rest = require('../util/rest');

let emailSenderApiUrl = '';
let cobrancas = [];

const executeCobrancaEmpresa = async (empresa) => {
    if(!empresa) return;

    const devedores = await Devedor.findAll({
        where: { cnpjEmpresa: empresa.cpfcnpj }
    });

    if(!devedores || devedores.length <=0) return;

    cobrancas = [];

    devedores.forEach(devedor => {
        generateCobrancaDevedor(empresa, devedor); 
    });

    if(!cobrancas || cobrancas.length <=0) return;

    console.log(`Enviando ${cobrancas.length} cobranças...`);
    Rest.post(
        emailSenderApiUrl, 
        message,
        (_) => console.log(`${cobrancas.length} cobranças enviadas com sucesso!`),
        (erro) => console.log(`>>>Erro: \n\n ${erro} \n\n ao enviar as cobranças: ${cobrancas}`)
    )
}

const generateCobrancaDevedor = (empresa, devedor) => {
    const titulos = await Titulo.findAll({
        where: { cpfcnpj: devedor.cpfcnpj }
    });

    let mediaDiasAtraso = DiasAtrasoService.calcularMediaDiasAtraso(devedor, titulos);

    titulos.forEach(titulo => {
        let dataCobranca = getDataCobranca(titulo, mediaDiasAtraso);
        if(isToday(dataCobranca))
            generateCobrancaTitulo(empresa, devedor, titulo);
    });
}

const generateCobrancaTitulo = (empresa, devedor, titulo) => {
    cobrancas.push({
        messageText: MessageService.composeMessage(empresa, devedor, titulo),
        email: devedor.email
    });
}

const getDataCobranca = (titulo, mediaDiasAtraso) => {
    return titulo.dataVencimento.addDays(-mediaDiasAtraso);
}

module.exports = { executeCobrancaEmpresa };