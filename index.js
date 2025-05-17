const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
const FROM_NUMBER = 'whatsapp:‪+14155238886‬';
const ADMIN_NUMBER = 'whatsapp:‪+573227849692‬';

app.post('/alerta-pago', (req, res) => {
  const { from, mensaje } = req.body;
  const alertMsg = Nuevo comprobante de pago:\nCliente: ${from}\nMensaje: ${mensaje};
  client.messages.create({ from: FROM_NUMBER, to: ADMIN_NUMBER, body: alertMsg });
  res.sendStatus(200);
});

app.post('/confirmar-recarga', (req, res) => {
  const { cliente, mensaje } = req.body;
  client.messages.create({
    from: FROM_NUMBER,
    to: whatsapp:${cliente},
    body: mensaje || 'Tu recarga ha sido completada. ¡Gracias por tu compra!',
  });
${mensaje};
  client.messages.create({ from: FROM_NUMBER, to: ADMIN_NUMBER, body: alertMsg });
  res.sendStatus(200);
});
  res.sendStatus(200);
});

app.post('/soporte', (req, res) => {
  const { plataforma, correo, perfil, pin, detalle, cliente } = req.body;
  const soporteMsg = Soporte solicitado por ${cliente}:\nPlataforma: ${plataforma}\nCorreo: ${correo}\nPerfil: ${perfil}\nPIN: ${pin}\nProblema: ${detalle};
  client.messages.create({ from: FROM_NUMBER, to: ADMIN_NUMBER, body: soporteMsg });
  res.sendStatus(200);
});

app.post('/enviar-codigo', (req, res) => {
  const { cliente, plataforma, codigo } = req.body;
  const msg = Aquí tienes tu acceso a ${plataforma}:\nCódigo: ${codigo};
client.messages.create({ from: FROM_NUMBER, to: whatsapp:${cliente}, body: msg });
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.send('Bot backend activo.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(Servidor activo en puerto ${PORT}));
