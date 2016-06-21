/**
 * Created by ubuntu on 21/6/16.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Authentication' });
});

router.get('/login' , function(req ,res){
    res.json("Login Page");
});

router.get('/register' , function(req ,res){
    res.json("Register Homepage");
});
module.exports = router;
