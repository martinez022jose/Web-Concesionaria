//Install modules
const express = require('express');
const ex = express();
const path = require('path');

//Settings
ex.set('port', 5000 || process.env.PORT); //Especificamos uso de port
ex.set('views', path.join(__dirname, 'views')); // Especificamos ruta de views
ex.engine('html', require('ejs').renderFile); //Modificamos uso de extension html
ex.set('view engine', 'ejs'); //Especificamos uso de motor de plantillas ejs

//Routes
ex.use(require('./routes/routes.js'));

//Create folder -g / Se entrega al navegador, para mejorar el frontend
ex.use(express.static(path.join(__dirname, 'public')));

//listening the server
ex.listen(ex.get('port'), () => {
    console.log('Se esta utilizando server port: ', ex.get('port'));
});