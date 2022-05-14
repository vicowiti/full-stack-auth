const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwtGenerator = require("../config/jwtGenerator");

//Registration logic
const registerUser = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.status(400);
    throw new Error("Please fill out all the fields!");
  }

  //Check if user already exists

  const checkUser = await User.findOne({ email });

  if (checkUser) {
    res.status(400);
    throw new Error("User Already exists");
  }

  //hash password
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashPassword,
  });

  res.status(200).json({
    name: `${user.firstName}, ${user.lastName}`,
    email: user.email,
    token: jwtGenerator(user._id),
  });
});

const loginUser = asyncHandler(async (req, res) => {});

module.exports = {
  registerUser,
  loginUser,
};
