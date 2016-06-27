/**
 * Created by ubuntu on 21/6/16.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hiccup.db');


var path = require('path');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('home', { message: req.flash('message') });
});

router.post('/login' , function(req ,res){

    db.all("Select Email , Password from signup where Email = ? AND Password = ? " ,[req.body.Email , req.body.Password]
        , function (err , rows) {     console.log(rows.length) ;   //  console.log(rows[0].Email) ;
            rows.forEach(function (row) {

                if(rows.length != 0)       // (req.body.Email == row.Email)
                {
                    console.log('True');
                    res.sendFile(path.join(__dirname,'../','public','html','index.html'));
                }
                else if(rows.length === 0) {
                    console.log('False');
                    res.sendFile(path.join(__dirname,'../','public','html','home.html'));
                }
            });
     });
    
 });


router.post('/register' , function( req , res ){ 
 //   res.json("Register Page");
    console.log(req.body);
    db.run("insert into signup ( FirstName , LastName , Email , Password ) values ( ? , ? , ? , ? )" ,
        [ req.body.FirstName , req.body.LastName , req.body.Email , req.body.Password ] , function(err , row){
            if(err){
                res.json("Insertion Failed");
            }
            else {
                 res.json("Successfully inserted");
            }
        });

    //db.run("update signup set Email = 'stark@mail.com'  where FirstName = 'tony' "  ) ;
    // db.run("delete from signup where FirstName = 'tony' ");
});

module.exports = router ;
