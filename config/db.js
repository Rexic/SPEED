require("dotenv").config({path: "./config.env"});
const mongoose = require('mongoose');
const config = require('config');

const DB = process.env.MONGO_URI

const connectDB = async () => {
  mongoose
    .connect(DB, {
      usenewurlparser: true,
      useunifiedtopology: true,
    })
    .then(() => {
      console.log("Successfully connected Mongo");
    })
    .catch((error) => {
      console.log(`can not connect to database, ${error}`);
    });
};

module.exports = connectDB;
