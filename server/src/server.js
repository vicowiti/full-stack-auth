const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT;
const { connectToDB } = require("./config/db");

connectToDB();
const app = express();

// app middleware
app.use(cors());
app.use(express.json());

// Endpoint for testing

app.get("/", (req, res) => {
  res.status(200).json("Up and running");
});

app.listen(PORT, () => {
  console.log(`App running on port: ${PORT}`);
});
