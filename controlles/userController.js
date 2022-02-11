const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// @desc    Register new User
// @routes  POST /api/users
// @access  Public

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please add all fields");
  }
  //check if user already exists
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  //hashed password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  //create User
  const user =await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400)
    throw new Error("Invalid user data");
  }

});

// @desc    Authenticate a User
// @routes  POST /api/users/login
// @access  Public

const loginUser = asyncHandler(async (req, res) => {

    const {email,password} = req.body;

    if(!email || !password){
        res.status(400)
        throw new Error('please fill all details')
    }

    //check user email
    const user =await User.findOne({email})



    if(user && (await bcrypt.compare(password,user.password))){
        res.status(200).json({
            id:user.id,
            name:user.name,
            email:user.email,
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credentials");
    }

});
// @desc    get User data
// @routes  GET /api/users/me
// @access  Private

const getMe = asyncHandler(async (req, res) => {
  res.json({ message: "User Details" });
});

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
