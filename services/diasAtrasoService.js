const moment = require('moment')

const differenceBetweenDates = (primeiraData, segundaData) => {
    var a = moment(primeiraData);
    var b = moment(segundaData);
    var diffDays = b.diff(a, 'days');
    return diffDays;
}

const sumArray = (array) => {
    array.reduce((a, b) => a + b, 0);
}

const calcularMediaDiasAtraso = (titulos) => {
    let titulosPagos = titulos.find( t => t.pago);

    if(!titulosPagos || titulosPagos <=0 ) return 0;

    let diasAtraso = titulosPagos.map(t => differenceBetweenDates(t.dataVencimento, t.dataPagamento));
    let somaDias = sumArray(diasAtraso);
    
    return Math.ceil(somaDias / diasAtraso.length);
}

module.exports = { calcularMediaDiasAtraso } ;