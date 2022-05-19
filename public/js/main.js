const redirectToUrl = (url) => {
    window.location.href = url;
};

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
        .then(async (res) => {
            const json = await res.json();

            if (res.ok) {
                redirectToUrl('novaEmpresaCriada');
            } else {
                const firstError = json.message?.errors[0];
                alert(firstError.message || 'Dados inválidos');
            }
        })
        .catch((err) => console.log('err', err));
};
