var express = require('express');
var path = require('path');
var passport = require('passport') ;
var router = express.Router();
var session = require('express-session');
var sess ;
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/home' , function(req, res){
	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
})

router.get('/' , function (req ,res ){

//	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
	sess = req.session;
	if(sess.email) {
		res.sendFile(path.join(__dirname,'../','public','html','index.html'));
		//res.write('<h1>Hello '+sess.email+'</h1>');
		//res.end('<a href="	">Logout</a>');
	} else {
		res.sendFile(path.join(__dirname,'../','public','html','home.html'));
		//res.write('<h1>Please login first.</h1>');
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

router.get('/register' , function (req ,res ){
	// res.render("signup");
	res.sendFile(path.join(__dirname,'../','public','html','signup.html'));
});

router.get('/index' , function(req ,res ){
	res.sendFile(path.join(__dirname,'../','public','html','index.html'));
});


module.exports = router;
