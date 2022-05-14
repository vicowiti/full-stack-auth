const express = require("express");
const { loginUser, registerUser } = require("../controllers/userControllers");

const router = express.Router();

// @Description: Register User
// @Method POST

router.post("/", registerUser);

router.post("/login", loginUser);

module.exports = router;
