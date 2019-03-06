var mysql = require('mysql');
var conn = require('dotenv').config();
// let env = process.env.JAWSDB_URL || 'development';
console.log("jAWS DB = ", conn.JAWSDB_URL);

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    var connection = mysql.createConnection({
        database: "burgers_db",
        user: "root",
        password: "root",
        host: "localhost",
        port: 3306
    });
};

connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Connection successful on thread: " + connection.threadId);
});

module.exports = connection;