const mongoose =
  require("mongoose");

// =========================
// SET SCHEMA
// =========================

const setSchema =
  new mongoose.Schema({

    setNumber: Number,

    reps: Number,

    avgAngle: Number,

    formScore: Number,

    timestamp: Date,
  });

// =========================
// EXERCISE SCHEMA
// =========================

const exerciseSchema =
  new mongoose.Schema({

    exerciseName: String,

    sets: [setSchema],
  });

// =========================
// WORKOUT SCHEMA
// =========================

const workoutSchema =
  new mongoose.Schema({

    workoutName: String,

    date: {
      type: Date,
      default: Date.now,
    },

    duration: Number,

    totalCalories: Number,

    averageFormScore: Number,

    exercises: [
      exerciseSchema,
    ],
  });

// =========================
// EXPORT
// =========================

module.exports =
  mongoose.model(
    "Workout",
    workoutSchema
  );