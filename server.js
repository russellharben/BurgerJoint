var path = require('path');
// bring in and instanciate express
var express = require('express');
var app = express();


var PORT = process.env.PORT || 3000;

// Requiring our models for syncing
// var db = require("./models/burger");

// Static directory
app.use(express.static(path.join(__dirname, "public")));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require Handlebars
var exphbs = require('express-handlebars');
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs(
    {
        defaultLayout: "main"
    })
);
app.set("view engine", "handlebars");

//
require('./controllers/burgers_controller')(app);


// Listening on PORT...
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});


