

// @desc    Get Goals
// @routes  GET /api/goals
// @access  Private

const getGoals =(req,res) => {
    res.status(200).json({Message:"Get goals"})
}

// @desc    Set Goal
// @routes  POST /api/goals
// @access  Private

const setGoals =(req,res)=>{
    res.status(200).json({Message:"Set Goals"})
}

// @desc    update Goal
// @routes  PUT /api/goals
// @access  Private

const updateGoals =(req,res)=>{
    res.status(200).json({Message:`update Goals ${req.params.id}`})
}
// @desc    Delete Goal
// @routes  DELETE /api/goals
// @access  Private

const deleteGoals =(req,res)=>{
    res.status(200).json({Message:`Delete Goals ${req.params.id}`})
}

module.exports ={
    getGoals,deleteGoals,setGoals,updateGoals
}