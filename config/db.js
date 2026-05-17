const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://kaustubhs:coadtHNnsPcfM0I5@smartgym.gz4dgbm.mongodb.net/?appName=smartgym");
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;