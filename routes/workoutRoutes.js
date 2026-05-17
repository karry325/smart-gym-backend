const express = require("express");

const router = express.Router();

const workoutController = require("../controllers/workoutController");

// SAVE WORKOUT
router.post("/", workoutController.saveWorkout);
router.post(
  "/full",
  workoutController.saveFullWorkout
);

module.exports = router;