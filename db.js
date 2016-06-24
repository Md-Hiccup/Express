/**
 * Created by ubuntu on 22/6/16.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('hiccup.db');

var user = "create table if not exists user  ( Id INTEGER NOT NULL PRIMARY KEY , UserName TEXT NOT NULL ," +
    "  Password TEXT NOT NULL );";

var signup = "create table if not exists signup ( Id INTEGER NOT NULL , FirstName TEXT NOT NULL , " +
    "LastName TEXT NOT NULL, Email TEXT NOT NULL , Password TEXT NOT NULL);";
 
var scoreBoard = "create table if not exists scoreBoard ( Id INTEGER NOT NULL  , UserName TEXT NOT NULL ," +
    " Rank INTEGER ,  Score INTEGER );";


db.serialize(function() {
    console.log(db);
    db.run(user , function(err){
        if(err)
            console.log(err);
        else 
            console.log("User Table is created");
    });
    db.run(signup , function(err){
        if(err)
            console.log(err);
        else 
            console.log("SignUp Table is created");
    });
    db.run(scoreBoard , function(err){
        if(err)
            console.log(err);
        else 
            console.log("ScoreBoard Table is created");
    });

    db.run("insert into user ( 'UserName' , 'Password') values(?,?)", "hussain@gmail.com" , "dastan");
    console.log("1 Email Id is Inserted ");
});

//db.close();
