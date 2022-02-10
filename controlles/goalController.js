const asyncHandler =require('express-async-handler')


// @desc    Get Goals
// @routes  GET /api/goals
// @access  Private

const getGoals =asyncHandler( async (req, res) => {
  res.status(200).json({ Message: "Get goals" });
});

// @desc    Set Goal
// @routes  POST /api/goals
// @access  Private

const setGoals =asyncHandler( async (req, res) => {
  console.log(req.body);
  if (!req.body.text) {
    // res.status(400).json({ message: "Please add a Text" });
    res.status(400)
    throw new Error("Please add a Text");
  }

  res.status(200).json({ Message: "Set Goals" });
});

// @desc    update Goal
// @routes  PUT /api/goals
// @access  Private

const updateGoals =asyncHandler( async (req, res) => {
  res.status(200).json({ Message: `update Goals ${req.params.id}` });
});
// @desc    Delete Goal
// @routes  DELETE /api/goals
// @access  Private

const deleteGoals =asyncHandler( async (req, res) => {
  res.status(200).json({ Message: `Delete Goals ${req.params.id}` });
});

module.exports = {
  getGoals,
  deleteGoals,
  setGoals,
  updateGoals,
};
