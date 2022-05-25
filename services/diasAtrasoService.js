const sumArray = (array) => {
    array.reduce((a, b) => a + b, 0);
}

const calcularMediaDiasAtraso = (titulos) => {
    let titulosPagos = titulos.find( t => t.pago);

    if(!titulosPagos || titulosPagos<=0) return 0;

    let valores = titulosPagos.map(t => t.valor);
    let somaValores = sumArray(valores);
    
    return Math.ceil(somaValores / valores);
}

module.exports = { calcularMediaDiasAtraso } ;