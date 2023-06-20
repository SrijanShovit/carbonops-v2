const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
