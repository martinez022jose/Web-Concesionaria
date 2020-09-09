const express = require('express');
const app = express();
const path = require('path');

//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

//Routes
app.use(require('./routes/routes.js'));

//listening the server
app.listen(app.get('port'), () => {
    console.log('Se esta utilizando server port: ', app.get('port'));
});