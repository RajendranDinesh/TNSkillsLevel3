const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  questionId: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  selectedOption: {
    type: Number,
    required: false
  },
  userInput: {
    type: String,
    required: false
  }
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
