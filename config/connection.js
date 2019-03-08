var mysql = require('mysql');
require('custom-env').env();
// console.log("Custom ENV", process.env.JAWSDB_URL);


// console.log(process.env.JAWSDB_BLACK_URL);
// if(process.env.JAWSDB_BLACK_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_BLACK_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "root",
//         database: "burgers_db"
//     });
// }

var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "burgers_db"
})


connection.connect(function (err) {
    if (err) {
        console.log(err);
    }
    console.log("Connection successful on thread: " + connection.threadId);
});

module.exports = connection;