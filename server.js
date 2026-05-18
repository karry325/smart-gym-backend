const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
require("dotenv").config();

const workoutRoutes = require("./routes/workoutRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/workouts", workoutRoutes);
app.get("/", (req, res) => {

  res.send(
    "Smart Gym Backend Running 🚀"
  );
});
app.listen(5000,"0.0.0.0", () => {
  console.log("Server running on port 5000");
});