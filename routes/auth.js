/**
 * Created by ubuntu on 21/6/16.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hiccup.db');

var flash = require('connect-flash');
var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile(path.join(__dirname,'../','public','html','home.html'));
});

router.post('/login' , function(req ,res){
   // console.log(req.body.email);
    db.all("Select Email , Password from signup where Email = ? AND Password = ? ",[ req.body.email ,req.body.password ]
        , function (err , rows) {     console.log(rows.length) ;   //  console.log(rows[0].Email) ;
            rows.forEach(function (row) {
                
                if(rows.length != 0)       // (req.body.Email == row.Email)
                {
                    console.log('True');
                    res.sendFile(path.join(__dirname,'../','public','html','index.html'));
                }
                else {
                    console.log('False');
                  //  res.sendFile(path.join(__dirname,'../','public','html','home.html'));
                }
            });
     });
            /** session handling 
        User.findOne({ email: req.body.email }, function(err, user) {
            if (!user) {
                res.sendFile(path.join(__dirname,'../','public','html','home.html'), options, function (err) {
                    if (err) {
                        console.log(err);
                        res.status(err.status).end();
                    }
                });
            } else {
                if (req.body.password === user.password) {
                    //  req.session.user = user;              // sets a cookie with the user's info
                    res.redirect('../public/html/index.html');
                } else {
                    res.sendFile(path.join(__dirname,'../','public','html','home.html'), options, function (err) {
                        if (err) {
                            console.log(err);
                            res.status(err.status).end();
                        }
                    });
                }
            }
        });    **/
 });            


router.post('/register' , function( req , res ){ 
 //   res.json("Register Page");
    var data = false;
    console.log(req.body.firstname);
    db.run("insert into signup ( FirstName , LastName , Email , Password ) values ( ? , ? , ? , ? )" ,
        [ req.body.firstname , req.body.lastname , req.body.email , req.body.password ] , function(err , rows){
            if(err){
                console.log('Failed'); 
                res.json("Insertion Failed");
            }
            else {  console.log('successful'); data=true ;
                 res.json("Successfully inserted");
            }
        });

    //db.run("update signup set Email = 'stark@mail.com'  where FirstName = 'tony' "  ) ;
    // db.run("delete from signup where FirstName = 'tony' ");
});

module.exports = router ;
