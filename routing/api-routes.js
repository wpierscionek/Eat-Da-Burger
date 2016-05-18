var path = require('path');
var orm = require('../config/orm.js');


module.exports = function(app) {

    app.post('/add', function(request, response) {

        if (request.body.burger_name) {
            orm.addBurger(request.body.burger_name, function() {
                response.redirect('/');
            })
        }
    })

    app.put('/eat', function(request, response) {

        orm.eatBurger(request.body.burgerId, function() {
            response.redirect('/');
        })
    })

}
