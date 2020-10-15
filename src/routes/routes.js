const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/', (req, res) => {
    res.render('../views/index.html',{ title : 'Home'});
});

router.get('/contact', (req, res) => {
    res.render('../views/contact.html',{ title : 'Contact'});
});

router.get('/aboutUs',(req,res) => {
    res.render('../views/aboutUs.html',{ title : 'AboutUs'});
});

router.get('/opportunities',(req, res) => {
    res.render('../views/opportunities.html', {title : 'Opportunities'});
});

router.post('/send-email', urlencodedParser, async (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const texto = req.body.texto;

   
    var transporter = nodemailer.createTransport("SMTP", {
        service: "Gmail", //al usar un servicio bien conocido, no es necesario proveer un nombre de servidor.
        auth: {
          user: "martinez022jose@gmail.com",
          pass: "mataderos32"
        },
      });
      
    var mailOptions = {
        from: "martinez022jose <martinez022jose@gmail.com>",
        to: req.body.email,
        subject: "chiques",
        text: "hola todes"
    }

    await transporter.sendMail(mailOptions, (error,respuesta) => {
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    });

    
});

module.exports = router;