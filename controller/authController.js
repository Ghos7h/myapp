(function (authController) {
	'use strict';
	var _ = require('underscore');
	var authService = require('../service/authService');
	console.log("In auth controller");
	authController.register = function(req, res, next) {
		console.log("In register function of authController");
		authService.register(req.body, function(err, registerResponse) {
			if(err) {
				next(err); return;
			}
			res.status(200).send(registerResponse).end();
		})
		
	}
})(module.exports)