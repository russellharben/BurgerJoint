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
        });
    },

    findOne: function (id) {
        let query = "Select * from burgers where id = ? ORDER BY ID";
        conn.query(
            query,
            [id],
            function (err, data) {
                if (err) throw err;
                // console.log("ORM Data = ", data);
            }
        )
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
    },

    // updateOne: function (burger_name, devoured, id) {
    //     let burger = burger_name;
    //     let eaten = devoured;
    //     let id = id;
    //     let query = "Update burgers set"
    //     conn.query(
    //         query,
    //         [burger_name, devoured],
    //         function (err, data) {
    //             if (err) {
    //                 throw err;
    //             } else {
    //                 console.log(data);
    //             }
    //         }
    //     )
    // }
}

module.exports = orm;


