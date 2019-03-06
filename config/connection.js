var mysql = require('mysql');
require('custom-env').env('production');
console.log("Custom ENV", process.env.JAWSDB_URL);


var connection = mysql.createConnection({
    database: "burgers_db",
    user: "root",
    password: "root",
    host: "localhost",
    port: 3306
});


connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Connection successful on thread: " + connection.threadId);
});

module.exports = connection;