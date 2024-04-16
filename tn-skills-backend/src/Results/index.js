// routes/index.js

const express = require('express');
const resultController = require('./controller');

const router = express.Router();

router.post('/results', resultController.storeUserResponse);
router.get('/results', resultController.getDashboardData);
router.put('/results', resultController.updateUserResponse);

module.exports = router;
