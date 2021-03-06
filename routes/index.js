var express = require('express');
var path = require('path');
var passport = require('passport') ;
var router = express.Router();
var session = require('express-session');
var sess ;
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

router.get('/' , function(req, res){
	console.log("in index");
	res.render('index');
	//res.sendFile(path.join(__dirname,'../','public','html','index.html'));
});

router.get('/dashboard' , function(req, res){
	console.log("in dashboard");
	res.render('dashboard');
	//res.sendFile(path.join(__dirname,'../','public','html','index.html'));
});0

router.get('/home' , function (req ,res ){
//	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
	console.log("in home");
	sess = req.session;
	sess.email = req.body.email ;
//	console.log(sess.email);
	if(sess.email) {
		console.log('Second '+sess.email);
		res.sendFile(path.join(__dirname,'../','public','html','index.html'));
		//res.write('<h1>Hello '+sess.email+'</h1>');
		//res.end('<a href="	">Logout</a>');
	} else {
		console.log('first '+sess.email);
		res.sendFile(path.join(__dirname,'../','public','html','home.html'));
		//res.end('<a href = "http://localhost:3000/home">Login</a>');
	}
});

router.get('/logout' , function(req ,res ) {
	req.session.destroy(function (err) {  
		if (err) { 
			console.log(err); 
		} else { 
			res.end('done');
			//res.sendFile(path.join(__dirname, '../', 'public', 'html', 'home.html'));
		} 
	});
});
/*
router.get('/login' , function ( req, res ){
//	res.render('login');
	res.sendFile(path.join(__dirname, '../', 'public' , 'html' , 'home.html'))
});
/*	
router.get('/register' , function (req ,res ){
	console.log("in register");
	//res.render("index");
	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
});
/*
 router.get('/index' , function(req ,res ){
 res.sendFile(path.join(__dirname,'../','public','html','index.html'));
 });*/

module.exports = router;
