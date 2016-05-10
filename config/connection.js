var mysql = require('mysql');

var connection = mysql.createConnection({
    port: 3306,
    host: 'l9dwvv6j64hlhpul.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'n9jogozvtox01zi0',
    password: 'ewywzkkjw8759kj1',
    database: 'w8eq483o13sjf0z8'
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
