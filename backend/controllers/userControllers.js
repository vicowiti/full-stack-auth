import asyncHandler from "express-async-handler";

// Login a user
//Method: POST
//endpoint: /api/v1/users/auth
//protected: false

const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Auth User",
  });
});

// Register a user
//Method: POST
//endpoint: /api/v1/users/
//protected: false

const createUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Create User",
  });
});

// Logout a user
//Method: POST
//endpoint: /api/v1/users/logout
//protected: false

const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Logout User",
  });
});

// Get a user profile
//Method: GET
//endpoint: /api/v1/users/profile
//protected: true

const getProfile = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "get User Profile",
  });
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
