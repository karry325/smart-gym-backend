const Workout = require("../models/Workout");

exports.saveWorkout = async (req, res) => {
  try {

    const {
      exercise,
      reps,
      duration,
      avgAngle,
      formScore,
      calories,
    } = req.body;

    const workout = new Workout({
      exercise,
      reps,
      duration,
      avgAngle,
      formScore,
      calories,
    });

    await workout.save();

    res.status(201).json({
      message: "Workout saved successfully",
      workout,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      message: "Server error",
    });

  }
};

exports.saveFullWorkout =
  async (req, res) => {

  try {

    console.log(
      "REQ BODY:",
      req.body
    );

    const workout =
      new Workout(req.body);

    await workout.save();

    res.status(201).json({
      message:
        "Full workout saved",
      workout,
    });

  } catch (error) {

    console.log(
      "SAVE ERROR:",
      error
    );

    res.status(500).json({
      message:
        "Error saving workout",
    });
  }
};