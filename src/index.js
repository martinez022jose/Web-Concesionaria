const express = require('express');
const ex = express();
const path = require('path');

//Settings
ex.set('port', 5000);
ex.set('views', path.join(__dirname, 'views'));
ex.engine('html', require('ejs').renderFile);
ex.set('views engine', 'ejs');

//Routes
ex.use(require('./routes/routes.js'));

//Create folder -g 
ex.use(express.static(path.join(__dirname, 'public')));

//listening the server
ex.listen(ex.get('port'), () => {
    console.log('Se esta utilizando server port: ', ex.get('port'));
});