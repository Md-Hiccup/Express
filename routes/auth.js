/**
 * Created by ubuntu on 21/6/16.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hiccup.db');


var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Authentication' });
});

router.post('/login' , function(req ,res){
    res.json("Login Page");
    //console.log(req.body.UserName);
    //console.log(req.body.Password);
    //db.run("Select FirstName , LastName from signup where Email = ? AND Password = ? ;",
    //    [ req.query.Email , req.query.Password ]);
    db.run("update signup set Email = 'stark@mail.com'  where FirstName = 'tony' "  ) ;
});


router.post('/register' , function( req , res ){ 
    res.json("Register Page");
    console.log(req.body);
    db.run("insert into signup ( FirstName , LastName , Email , Password ) values ( ? , ? , ? , ? )" ,
        [ req.body.FirstName , req.body.LastName , req.body.Email , req.body.Password ]);
});
module.exports = router;
