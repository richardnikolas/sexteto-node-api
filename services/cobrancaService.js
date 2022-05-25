const Devedor = require('../models/devedorModel');
const Titulo = require('../models/tituloModel');
const MessageService = require('./messageService');
const DiasAtrasoService = require('./diasAtrasoService');
const Rest = require('../util/rest');
const MailSenderService = require('../services/sendMailService');

let emailSenderApiUrl = 'https://9rbh4zcl6h.execute-api.us-east-1.amazonaws.com/dev/testses';
let UseApi = false;

const executeCobrancaEmpresa = async (empresa, useApi = false) => {
    if (!empresa) return;

    UseApi = useApi;

    console.log("empresa", empresa);

    const devedores = await Devedor.findAll({
        where: { cnpjEmpresa: empresa.cpfcnpj }
    });

    if (!devedores || devedores.length <= 0) return;

    for (let i = 0; i < devedores.length; i++) {
        await generateCobrancaDevedor(empresa, devedores[i]);
    }
}

const generateCobrancaDevedor = async (empresa, devedor) => {
    console.log("devedor", devedor);

    const titulos = await Titulo.findAll({
        where: { cpfcnpj: devedor.cpfcnpj }
    });

    console.log("titulos", titulos);

    let mediaDiasAtraso = DiasAtrasoService.calcularMediaDiasAtraso(titulos);

    for (let i = 0; i < titulos.length; i++) {
        console.log("titulo", titulos[i]);
        // let dataCobranca = getDataCobranca(titulos[i], mediaDiasAtraso);

        // if (isToday(dataCobranca))
        await generateCobrancaTitulo(empresa, devedor, titulos[i]);
    }
}

const generateCobrancaTitulo = async (empresa, devedor, titulo) => {
    console.log(`Enviando cobrança para ${devedor.nome} ...`);

    let cobranca = {
        email: devedor.email,
        nome: devedor.nome,
        msg: MessageService.composeMessage(empresa, devedor, titulo),
        assunto: 'Alerta simulado de vencimento de fatura',
        nome_empresa: 'AFIPIO'
    }

    if (UseApi){
        await sendCobrancaApi(cobranca);  
        return;
    }

    console.log("cobranca", cobranca);

    MailSenderService.sendMail(cobranca);
}

const sendCobrancaApi = async (cobranca) => {
    await Rest.post(
        emailSenderApiUrl,
        cobranca,
        (_) => console.log(`Cobranças para ${cobranca.nome} enviada com sucesso!`),
        (erro) => console.log(`>>>Erro: \n\n ${erro} \n\n ao enviar a cobrança para ${cobranca.nome}`)
    );
}

const getDataCobranca = (titulo, mediaDiasAtraso) => {
    return titulo.dataVencimento.addDays(-mediaDiasAtraso);
}

module.exports = { executeCobrancaEmpresa };
