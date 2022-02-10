const asyncHandler =require('express-async-handler')
const Users =require('../models/userModel');

// @desc    Register new User
// @routes  POST /api/users
// @access  Public

const registerUser =(req,res) =>{
    res.json({message:"Register User"})
}

// @desc    Authenticate a User
// @routes  POST /api/users/login
// @access  Public

const loginUser =(req,res) =>{
    res.json({message:"Login User"})
}

// @desc    get User data
// @routes  GET /api/users/me
// @access  Private

const getMe =(req,res) =>{
    res.json({message:"User Details"})
}

module.exports ={
    registerUser,loginUser,getMe
}