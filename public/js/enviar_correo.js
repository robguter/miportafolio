const nodemailer = require('nodemailer');

    // Configura tu transporter de correo
    // Puedes usar una cuenta de prueba de Ethereal (como en el ejemplo de Nodemailer)
    // o configurar tu propio servidor de correo (ej. Gmail, pero puede requerir OAuth)
    let transporter = nodemailer.createTransport({
        service: 'gmail', // O el servicio que uses
        auth: {
            user: 'tu_email@gmail.com', // Tu dirección de correo electrónico
            pass: 'tu_contraseña' // Tu contraseña o clave de aplicación
        }
    });

    // Define las opciones del correo
    const mailOptions = {
        from: '"Robert Gutiérrez" <robguter114@gmail.com>', // Remitente
        to: 'destinatario@example.com', // Destinatario(s)
        subject: 'Asunto del correo desde Node.js', // Asunto
        html: '<h1>Hola!</h1><p>Este es un correo de prueba enviado desde Node.js.</p>' // Cuerpo del correo en HTML
    };

    // Envía el correo
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error al enviar el correo:', error);
        }
        console.log('Correo enviado:', info.messageId);
    });