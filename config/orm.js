var connection = require('./connection.js');
console.log("orm connected");


var orm = {

    allBurgers: function(callback) {
        var s = 'SELECT * FROM burgers ORDER BY time desc;';
        connection.query(s, function(err, allBurgersData) {
            if (err) {
                throw err
            }
            callback(allBurgersData)
        });
    }
};

module.exports = orm;
