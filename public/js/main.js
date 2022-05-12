
const redirectToUrl = (url) => {
    window.location.href = url;
}

const createNewEmpresa = async () => {
    const cnpjValue = document.querySelector('#inputEmpresaCnpj')?.value.replace(/[\/.-]/g, '');
    const nomeEmpresaValue = document.querySelector('#inputNomeEmpresa')?.value;
    const emailReprValue = document.querySelector('#inputEmailRepr')?.value;
    const nomeReprValue = document.querySelector('#inputNomeRepr')?.value;
    const assuntoValue = document.querySelector('#inputAssunto')?.value;
    const msgEmailValue = document.querySelector('#inputMsgEmail')?.value;

    const requestBody = {
        cpfcnpj: cnpjValue,
        nomeEmpresa: nomeEmpresaValue,
        nomeRepresentante: nomeReprValue,
        emailRepresentante: emailReprValue,
        mensagemEmail: msgEmailValue,
        assuntoEmail: assuntoValue
    };

    await fetch('/empresa', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((res) => { 
            res.json();
            redirectToUrl("novaEmpresaCriada");
        })
        .catch((err) => console.log('err', err))
};
