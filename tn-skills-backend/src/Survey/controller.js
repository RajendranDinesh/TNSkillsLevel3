// controllers/questionController.js

const Question = require('./model');

exports.createQuestion = async (req, res) => {
  try {
    const questions = req.body;
    for (const question of questions) {
      const { question: q, options } = question;
      const newQuestion = new Question({
        question: q,
        options
      });
      await newQuestion.save();
    }
    res.status(201).json({ message: 'Questions created' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const id = req.params.id;
    const question = await Question.findOneAndDelete({ _id: id });

    if (!question) {
      return res.status(404).json({ message: 'Question not found' });
    }

    res.json({ message: 'Question deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
