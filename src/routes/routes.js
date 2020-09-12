const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html',{ title : 'index'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html',{ title : 'Contact'});
});

router.get('/aboutUs',(req,res) => {
    res.render('aboutUs.html',{ title : 'aboutUs'});
});

router.get('/opportunities',(req, res) => {
    res.render('opportunities.html', {title : 'opportunities'});
});

module.exports = router;