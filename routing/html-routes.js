var path = require('path');
var orm = require('../config/orm.js');
console.log(" html routes connected");

module.exports = function(app) {

    app.get('/', function(request, response) {

        orm.allBurgers(function(allBurgersData) {
            response.render('index', { allBurgersData });
        })
    })
}
