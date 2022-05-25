const nodemailer = require('nodemailer');

const sender = 'afipio.no.reply@gmail.com';
const password = 'afipio2022';

const remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    service: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth:{
        user: sender,
        pass: password
    }
});

const sendMail = (message) => {
    console.log(message);
    var messageJson = {
        from: {
            name: message.nome,
            address: sender
        },
        to: message.email,
        subject: message.assunto,
        text: message.msg
    };
    remetente.sendMail(
        messageJson,
        (error) => console.log(`Erro ao enviar e-mail localmente: ${error}`)
    );
}


module.exports = { sendMail };



