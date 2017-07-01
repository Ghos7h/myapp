var express = require('express');
var router = express.Router();
var authController = require('../controller/authController');

router.post('/register', authController.register);
module.exports = router;