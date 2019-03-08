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

    findOne: function (id,cb) {
        let query = "Select * from burgers where id = ?";
        conn.query(
            query,
            [id],
            function (err, data) {
                if (err) {
                    throw err;
                // console.log("ORM Data = ", data);
            }
            cb(data);
            console.log("Find one = ", data);
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


