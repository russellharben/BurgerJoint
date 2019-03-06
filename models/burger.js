var orm = require('../config/orm');

var newBurger = {
  findAll: function (cb) {
    orm.findAll("burgers", function (response) {
      cb(response);
    });
  },

  findOne: function (id, cb) {
    orm.findOne("burgers", id, function (response) {
      cb(response);
    });
  },

  insertOne: function (burger_name, devoured, cb) {
    orm.insertOne("burgers", burger_name, devoured , function (response) {
      cb(response);
    });
  },

}


module.exports = newBurger;