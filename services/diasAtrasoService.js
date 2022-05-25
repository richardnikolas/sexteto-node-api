const sumArray = (array) => {
    array.reduce((a, b) => a + b, 0);
}

const calcularMediaDiasAtraso = (titulos) => {
    let valores = titulos.map(t => t.valor);
    let somaValores = sumArray(valores);
    
    return Math.ceil(somaValores / valores);
}

module.exports = { calcularMediaDiasAtraso } ;