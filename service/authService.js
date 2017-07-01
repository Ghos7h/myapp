(function (authService) {
	var db = require('../config/db');
	// var Sequelize = require('sequelize');
	var Sequelize = require('sequelize')
	  , sequelize = new Sequelize('myapp', 'root', 'root', {
	      dialect: "mysql", // or 'sqlite', 'postgres', 'mariadb'
	      define: {
	        timestamps: false
	    },
	      port:    3306, // or 5432 (for postgres)
	    });

	sequelize
	  .authenticate()
	  .then(function(err) {
	    console.log('Connection has been established successfully.');
	  }, function (err) { 
	    console.log('Unable to connect to the database:', err);
	  });

	var Users = sequelize.import("../models/users");
	authService.register = function(reqObject ,callback) {
		console.log("reqObject ", reqObject);
		var NOW = Date();
		// sequelize.query("INSERT INTO users(firstName, lastName, phone,email,password, created, updated) VALUES ("+reqObject.firstName+","+reqObject.lastName+","+reqObject.phone+","+reqObject.email+","+reqObject.password+","+NOW+","+NOW+")",{
		// 	type:sequelize.QueryTypes.INSERT
		// }).then(function(createdRecord) {
		// 	callback(null, "authService");
		// }).catch(function(err) {
		// 	callback(err, null);
		// })
		Users
		.create({firstName: reqObject.firstName, lastName:reqObject.lastName, phone:reqObject.phone,email:reqObject.email,password:reqObject.password, created:NOW, updated:NOW}).then(function(createdRecord) {
			callback(null, createdRecord);
		}).catch(function(err) {
			callback(err, null);
		})
		// callback(null, "authService");
	}
})(module.exports)