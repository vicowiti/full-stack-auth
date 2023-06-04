import asyncHandler from "express-async-handler";
import User from "../models/userModels.js";
import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken.js";

// Login a user
//Method: POST
//endpoint: /api/v1/users/auth
//protected: false

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //   Check if required data was provided
  if (!email || !password) {
    res.status(400);
    throw new Error("Kindly provide all require fields");
  }

  //   Check if user with that email exists

  const user = await User.findOne({ email });

  if (!user) {
    res.status(400);
    throw new Error("Invalid credentials");
  }
  //   Check their password against what is stored
  const correctPassword = await bcryptjs.compare(password, user.password);

  if (!correctPassword) {
    res.status(400);
    throw new Error("Invalid credentials");
  } else {
    generateToken(res, user._id);
    res.status(200).json({
      name: user.name,
      email: user.email,
      id: user._id,
    });
  }
});

// Register a user
//Method: POST
//endpoint: /api/v1/users/
//protected: false

const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  // Check if the fields have data
  if (!name || !email || !password) {
    throw new Error("Kindly fill in all fields");
  }

  //   Check if the user is already registered => returns null if the iser doesnt exist
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already userExists, kindly Login");
  }

  //   If user is unique => hash password => create user in db
  const hashedPassword = await bcryptjs.hash(password, 10);

  //   create new User

  const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      message: "User created successfully",
    });
  } else {
    res.status(400);
    throw new Error("User was not created");
  }
});

// Logout a user
//Method: POST
//endpoint: /api/v1/users/logout
//protected: false

const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "Logout User",
  });
});

// Get a user profile
//Method: GET
//endpoint: /api/v1/users/profile
//protected: true

const getProfile = asyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    name: req.user.name,
    email: req.user.email,
  };
  res.status(200).json(user);
});

// Update a user profile
//Method: PUT
//endpoint: /api/v1/users/profile
//protected: true

const updateProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Update User Profile",
  });
});

export { updateProfile, getProfile, logoutUser, authUser, createUser };
