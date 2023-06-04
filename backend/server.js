import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoutes from "../backend/routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
import { connectDb } from "./config/db.js";
dotenv.config();
// Call Db
connectDb();

// console.log("myrouter",userRouter);

const PORT = process.env.PORT || 5000;
// Initialize app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);

// Test endpoint

app.get("/", (req, res) => {
  res.status(200).json({
    message: "We up",
  });
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, console.log(`App running on port: ${PORT}`));

// AUTH ROUTES

// -POST /api/v1/users => Register a user
// -POST /api/v1/users/auth => Authenticate or login a usr
// -POST /api/v1/users/logout => Logout user and clear cookie
// GET /api/v1/users/profile => Get user profile
// PUT /api/v1/users/profile => Update Profile
