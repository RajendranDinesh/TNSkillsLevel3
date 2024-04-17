const express = require('express');
const userController = require('./controller');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/signin', userController.login);

module.exports = router;
