const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html',{ title :'Pagina principal'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html',{ title :'Pagina secundaria'});
});

module.exports = router;