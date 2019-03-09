var queries = require('../config/orm');
// var db = require('../models/burger');
// var path = require('path');
// var orm = require('../config/orm');

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render("index", {});
    });

    app.post('/api/burgers', function (req, res) {
        let name = req.body.name;
        let devoured = req.body.eaten;
        queries.insertOne(name, devoured);
        res.json(req.body);
    });

    app.get('/api/burgers/all', function (req, res) {
        queries.findAll(function (data) {
            res.json(data);
        });
    });

    app.put('/api/burgers/update', function (req, res) {
        let name = req.body.name;
        let id = req.body.id;
        queries.updateOne(name, id, function (data) {
            res.json(data);
        });
    });

    app.delete('/api/burgers/delete', function(req, res){
        let id = req.body.id;
        queries.delete(id);
    });
};