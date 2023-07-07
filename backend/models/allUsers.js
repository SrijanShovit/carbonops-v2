const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  role: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true
  },
  contact: {
    type: String,
    require: true,
  },
  dob: {
    type: Date,
    require: true
  },
  password: {
    type: String,
    require: true,
  }
})

const userModel = mongoose.model("Users", signupSchema);

module.exports = userModel;
