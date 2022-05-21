const {formatReais} = require('../util/functions');

const NOME_EMPRESA = '#NOME_EMPRESA';
const NOME_DEVEDOR = '#NOME_DEVEDOR';
const NUMERO_TITULO = '#NUMERO_TITULO';
const VALOR_TITULO = '#VALOR_TITULO';
const DATA_VENCIMENTO_TITULO = '#DATA_VENCIMENTO';


const composeMessage = (empresa, devedor, titulo) => {
    let textoMensagem = empresa.mensagemEmail;
    textoMensagem.replace(NOME_EMPRESA, empresa.nomeEmpresa);
    textoMensagem.replace(NOME_DEVEDOR, devedor.nome);
    textoMensagem.replace(NUMERO_TITULO, titulo.codigoDeBarras);
    textoMensagem.replace(VALOR_TITULO, formatReais(titulo.valor));
    textoMensagem.replace(DATA_VENCIMENTO_TITULO, titulo.dataVencimento);
    return textoMensagem;
}

module.exports = { composeMessage };