const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');
//const smtpPool = require('nodemailer-smtp-pool');


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

   //"SMTP",smtpTransport( 
    var transporter = nodemailer.createTransport(smtpTransport({
        service: 'Gmail',
        auth: {
            user: 'martinez022jose@gmail.com',
            pass: "mataderos32",
            //xoauth2: xoauth2.createXOAuth2Generator({
                //type: 'xoauth2',
                //type: 'OAuth2',
                
                //clientId: '228993061492-u4hkahcfau09rp0c15kt62gvqb33tthk.apps.googleusercontent.com',
                //clientSecret: 'p9DDjHaQRIiowFLgYLzay_o2',
                //accessToken: 'ya29.a0AfH6SMCWGbsJSsgLZhJSu3z4ofGBQ25kErppmisASlCqnJvW5uIeGDcmCnuTXf40D5QjLhSXMFmwpRsjY1aDp_iAKUOBqegVBYfMzg5SBB2j1bavg7lr7-3cTCHQ03HbXb7XV19EcOfRs6MLopgXy6JjdANDiWgCmnc',
                //refreshToken: '1//04_gjUi68L0J4CgYIARAAGAQSNwF-L9IrQNOXGQmLq0--3Ch9K1tp7VDHpwgbU2zqJyfA4raN9O0q2J1Fs4qEHuEAf7-db1O-rYQ',
                
                
       
           // })
        }
    }));
      
    var mailOptions = {
        from: "martinez022jose <martinez022jose@gmail.com>",
        to: email,
        subject: "Web concesionaria",
        text: `mensaje: ${texto} ` 
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