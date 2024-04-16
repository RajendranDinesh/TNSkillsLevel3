// routes/index.js

const express = require('express');
const surveyController = require('./controller');

const router = express.Router();

router.post('/questions', surveyController.createQuestion);
router.get('/questions', surveyController.getAllQuestions);
router.delete('/questions/:id', surveyController.deleteQuestion);

module.exports = router;
