const mongoose = require("mongoose");

const url = process.env.URL;

const Mongoosedb = async () => {
  try {
    const con = await mongoose.connect(url);
    console.log("mongodb connected");
  } catch (error) {
    console.log(error, "db not connected");
  }
};

module.exports = Mongoosedb;
