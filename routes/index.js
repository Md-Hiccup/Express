var express = require('express');
var path = require('path');
var router = express.Router();


/* GET home page. *
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/
router.get('/' , function (req ,res ){
//    res.render("index");
	res.sendFile(path.join(__dirname,'../','public','html','home.html'));
});


module.exports = router;
