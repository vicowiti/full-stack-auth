import express from 'express'
import dotenv from 'dotenv'
import Router from "../backend/routes/userRoutes.js"

// console.log("myrouter",userRouter);

dotenv.config()
const PORT = process.env.PORT || 5000
// Initialize app
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/v1/users", Router )

// Test endpoint

app.get("/", (req, res) => {
    res.status(200).json({
        message: 'We up'
    })
})

app.listen(PORT, console.log(`App running on port: ${PORT}`))

// AUTH ROUTES

// -POST /api/v1/users => Register a user
// -POST /api/v1/users/auth => Authenticate or login a usr
// -POST /api/v1/users/logout => Logout user and clear cookie
// GET /api/v1/users/profile => Get user profile
// PUT /api/v1/users/profile => Update Profile