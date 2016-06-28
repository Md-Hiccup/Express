var express = require('express');
var path = require('path');
var passport = require('passport') ;
var router = express.Router();


/* GET home page. *
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/' , function (req ,res ){
 //	   res.render("index");
	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
});
router.get('/register' , function (req ,res ){
   // res.render("signup");
	res.sendFile(path.join(__dirname,'../','public','html','signup.html'));
});

router.get('/index' , function(req ,res ){
	res.sendFile(path.join(__dirname,'../','public','html','index.html'))
});


module.exports = router;
