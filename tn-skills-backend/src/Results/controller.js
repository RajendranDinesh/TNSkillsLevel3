const Result = require('./model');

exports.storeUserResponse = async (req, res) => {
  try {
    const userResponses = req.body;

    for (const response of userResponses) {
      const { userId, questionId, selectedOption, userInput } = response;

      const result = new Result({
        questionId,
        userId,
        selectedOption: selectedOption !== undefined ? selectedOption : null, // Set selectedOption if provided, otherwise null
        userInput: userInput !== undefined ? userInput : null // Set userInput if provided, otherwise null
      });

      await result.save();
    }

    res.status(201).json({ message: "User responses stored successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateUserResponse = async (req, res) => {
  try {
    const { userId, questionId, selectedOption, userInput } = req.body;

    // Define the update object based on whether selectedOption or userInput is provided
    const updateObject = selectedOption !== undefined ? { selectedOption } : { userInput };

    // Find the user's response by userId and questionId and update it
    const updatedResponse = await Result.findOneAndUpdate(
      { userId, questionId },
      updateObject,
      { new: true }
    );

    if (!updatedResponse) {
      return res.status(404).json({ message: 'User response not found' });
    }

    res.json(updatedResponse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const Question = require('../Survey/model');
exports.getDashboardData = async (req, res) => {
  try {
    // Retrieve questions
    const questions =w await Question.find().lean();

    // Retrieve results
    const results = await Result.find().lean();

    // Group results by questionId
    const groupedResults = results.reduce((acc, result) => {
      acc[result.questionId] = acc[result.questionId] || { _id: result.questionId, counts: { 1: 0, 2: 0, 3: 0, 4: 0, Others: 0 } };
      if (result.selectedOption) {
        acc[result.questionId].counts[result.selectedOption] += 1;
      } else if (result.userInput) {
        acc[result.questionId].counts.Others += 1;
      }
      return acc;
    }, {});

    // Merge results with questions
    const processedData = Object.values(groupedResults).map(group => ({
      questionId: group._id,
      counts: group.counts,
      question: questions.find(question => question._id.toString() === group._id.toString())
    }));

    // Send processed data to the frontend
    res.json(processedData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

