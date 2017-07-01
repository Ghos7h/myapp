(function(){
	'use strict';
	var express = require('express');
	var router = express.Router();
	var users = require('./users');
	var auth = require('./auth.js');

	/* GET home page. */
	router.get('/', function(req, res, next) {
	  res.render('index', { title: 'Express' });
	});
	module.exports.init = function(app) {
		app.use('/', router);
		app.use('/auth', auth);
	}
	
})();

// module.exports = router;
