import express from "express"
import {authUser, createUser, getProfile, logoutUser, updateProfile,} from "../controllers/userControllers.js"
export const Router = express.Router()

//Auth Route

Router.post("/auth", authUser)

// Register User

Router.post("/", createUser)

// Logout User


Router.post("/logout", logoutUser)

// Get user profile

Router.get("/profile", getProfile)

// Update profile

Router.put("/profile", updateProfile)


export default Router