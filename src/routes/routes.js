const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html',{ title : 'Home'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html',{ title : 'Contact'});
});

router.get('/aboutUs',(req,res) => {
    res.render('aboutUs.html',{ title : 'AboutUs'});
});

router.get('/opportunities',(req, res) => {
    res.render('opportunities.html', {title : 'Opportunities'});
});

module.exports = router;