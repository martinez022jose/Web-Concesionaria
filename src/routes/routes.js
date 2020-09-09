const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.ejs',{ title :'Pagina principal'});
});

router.get('/contact', (req, res) => {
    res.render('contact.ejs',{ title :'Pagina secundaria'});
});

module.exports = router;