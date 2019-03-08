var queries = require('../config/orm');
// var db = require('../models/burger');
// var path = require('path');
// var orm = require('../config/orm');

module.exports = function(app) {
    
    app.get('/', function(req, res){
        res.render("index", {});
    });

    app.post('/api/burgers', function(req, res){
        let name = req.body.name;
        let devoured = req.body.eaten;
        queries.insertOne(name, devoured);
        console.log(`You've created a new burger called ${name}`);
        res.json(req.body);
    });

    app.get('/api/burgers/all', function(req, res){
        queries.findAll(function(data){
            res.json(data);
        });
    });

    app.put('/api/burgers/update/:id/:name', function(req, res){
        let id = req.params.id;
        let name = req.params.name;
        queries.updateOne(name, id, function(data){
            console.log("DATA = ", data);
        })

    });

};