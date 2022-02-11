const asyncHandler =require('express-async-handler')
const Goal =require('../models/goalModel');
const User =require('../models/userModel')

// @desc    Get Goals
// @routes  GET /api/goals
// @access  Private

const getGoals =asyncHandler( async (req, res) => {
  const goals =await Goal.find({user:req.user.id})
  res.status(200).json(goals);
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
  const goal =await Goal.create({
    text:req.body.text,
    user:req.user.id
  })

  res.status(200).json(goal);
});

// @desc    update Goal
// @routes  PUT /api/goals
// @access  Private

const updateGoals =asyncHandler( async (req, res) => {

  const goal =await Goal.findById(req.params.id);
  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  const user =await User.findById(req.user.id)

  //check user is in the database
  if(!user){
    res.status(401)
    throw new Error("User not found")
  }

  //make sure user delete his own goal

  if(goal.user.toString() !==user.id){
    res.status(401)
    throw new Error("User not Authorized")
  }


  const updatedgoal =await Goal.findByIdAndUpdate(req.params.id,req.body,{new:true})

  res.status(200).json(updatedgoal);

});
// @desc    Delete Goal
// @routes  DELETE /api/goals
// @access  Private

const deleteGoals =asyncHandler( async (req, res) => {
  const goal =await Goal.findById(req.params.id);
  if(!goal){
    res.status(400)
    throw new Error('Goal not found')
  }

  const user =await User.findById(req.user.id)

  //check user is in the database
  if(!user){
    res.status(401)
    throw new Error("User not found")
  }

  //make sure user delete his own goal

  if(goal.user.toString() !==user.id){
    res.status(401)
    throw new Error("User not Authorized")
  }

  
 await Goal.findByIdAndRemove(goal._id)
  res.status(200).json({ id:  req.params.id });
});

module.exports = {
  getGoals,
  deleteGoals,
  setGoals,
  updateGoals,
};
