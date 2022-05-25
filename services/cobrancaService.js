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

    for (let i = 0; i < devedores.length; i++) {
        await generateCobrancaDevedor(empresa, devedores[i]);
    }

    if(!cobrancas || cobrancas.length <=0) return;

    console.log(`Enviando ${cobrancas.length} cobranças...`);
    await Rest.post(
        emailSenderApiUrl, 
        message,
        (_) => console.log(`${cobrancas.length} cobranças enviadas com sucesso!`),
        (erro) => console.log(`>>>Erro: \n\n ${erro} \n\n ao enviar as cobranças: ${cobrancas}`)
    )
}

const generateCobrancaDevedor = async (empresa, devedor) => {
    const titulos = await Titulo.findAll({
        where: { cpfcnpj: devedor.cpfcnpj }
    });

    let mediaDiasAtraso = DiasAtrasoService.calcularMediaDiasAtraso(devedor, titulos);

    for (let i = 0; i < titulos.length; i++) {
        let dataCobranca = getDataCobranca(titulos[i], mediaDiasAtraso);
        if(isToday(dataCobranca))
            await generateCobrancaTitulo(empresa, devedor, titulos[i]);
    }
}

const generateCobrancaTitulo = async (empresa, devedor, titulo) => {
    cobrancas.push({
        messageText: MessageService.composeMessage(empresa, devedor, titulo),
        email: devedor.email
    });
}

const getDataCobranca = (titulo, mediaDiasAtraso) => {
    return titulo.dataVencimento.addDays(-mediaDiasAtraso);
}

module.exports = { executeCobrancaEmpresa };