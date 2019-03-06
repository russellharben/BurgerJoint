var mysql = require('mysql');
require('custom-env').env('production');
// console.log("Custom ENV", process.env.JAWSDB_URL);

var connection = mysql.createConnection({
    database: process.env.Database,
    user: process.env.Username,
    password: process.env.Password,
    host: process.env.Host,
    port: process.env.Port
});



connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Connection successful on thread: " + connection.threadId);
});

module.exports = connection;