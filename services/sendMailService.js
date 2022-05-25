const nodemailer = require('nodemailer');

const sender = 'afipio.no.reply@gmail.com';
const password = 'afipio2022';

const remetente = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: true,
    auth:{
        user: sender,
        pass: password
    }
});

const sendMail = (message) => {
    var messageJson = {
        from: sender,
        to: message.email,
        subject: 'Alerta simulado de vencimento de fatura',
        text: message.messageText
    };
    remetente.sendMail(
        messageJson,
        (error) => console.log(`Erro ao enviar e-mail localmente: ${error}`)
    );
}






