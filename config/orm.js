var conn = require('./connection');
// var model = require('../models/burger');


// orm object
var orm = {
    findAll: function (cb) {
        let query = "Select * from burgers";
        conn.query(
            query,
            function (err, data) {
                if (err) {
                    throw err;
            }
            cb(data);
            console.log("Find all working");
        });
    },

    updateOne: function (name, id,cb) {
        let query = "UPDATE burgers SET burger_name = ? where id = ?";
        conn.query(
            query,
            [name, id],
            function (err, data) {
                if (err) {
                    throw err;
                // console.log("ORM Data = ", data);
            }
            cb(data);
            console.log("Update one = ", data);
        });
    },

    insertOne: function (burger_name, devoured) {

        let query = "Insert into burgers(burger_name, devoured) values (?, ?)";
        conn.query(
            query,
            [burger_name, devoured],
            function (err, data) {
                if (err) throw err;
                // console.log("ORM Data = ", data);
            }

        )
    }
}

module.exports = orm;


