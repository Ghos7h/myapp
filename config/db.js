var mysql = require('mysql');
  // config = require('../config/config');
var Sequelize = require('sequelize');

/*
var sequelize = require('sequelize');

var sequelize = new sequelize(config.db.database, config.db.user, config.db.password, {
  host: config.db.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
*/
var sequelize;
exports.getDbConnection = function() {
    if(!sequelize) {
        // sequelize =  new Sequelize('mysql://' + config.db.user +':' + config.db.password + '@' + config.db.host + ':' + config.db.port + '/' + config.db.database, {
        // define: config.sequelize.options});
        sequelize =  new Sequelize('mysql://root:root@localhost:3306/myapp', {
        define: config.sequelize.options});
        console.log('db new connection')
        return sequelize;
    }
    else {
        console.log('db existing connection')
        return sequelize;
    }
    
}

exports.getConnection = function() {
    // MySQL DB Connect
    // var mysqlConnection  =   mysql.createConnection({
    //     host: config.db.host,
    //     user: config.db.user,
    //     password: config.db.password,
    //     database: config.db.database
    // });
    var mysqlConnection  =   mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "myapp"
    });

    mysqlConnection.connect(function(error) {
        console.log('mysqlConnection.connect tried');

        if(error) {
            console.log('Problem with MySQL' + error);
        } else {
            console.log('Connected with Database');
        }
    });

    return mysqlConnection;
}

exports.paramsString = function() {
    var paramsString = '';

    if(arguments.length > 0) {
        paramsString = '\'' + arguments[0] + '\'';
    }
    for (var i = 1; i < arguments.length; i++) {
        paramsString += ' , \'' + arguments[i] + '\'';
    }
    return paramsString;
}

