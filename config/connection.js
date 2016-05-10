var mysql = require('mysql');
var connection = mysql.createConnection({
    // port: 3306, //standart port for mysql
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
});
// console.log("mysql connected");


connection.connect(function(err) {
    if (err) {
        console.log('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
