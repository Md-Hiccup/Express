/**
 * Created by ubuntu on 20/6/16.
 */
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('test.db');

db.serialize(function() {
     console.log(db);
    db.run("CREATE TABLE user1 ( id int )");
    var stmt = db.prepare("INSERT INTO user VALUES(?)");
    for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
    }
    stmt.finalize();

    db.each("SELECT id FROM user", function(err, row) {
        console.log("User id : "+row.id);
    });
});

db.close();