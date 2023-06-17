const mongoose = require("mongoose");
const IndividualProfileCompletionSchema = mongoose.Schema({
  individual_MongodbId: {
    required: true,
    type: String,
  },
  profileImage: {
    type: String,
    trim: true,
  },
  dob: {
    required: true,
    type: String,
    trim: true,
  },
  city: {
    required: true,
    type: String,
    trim: true,
  },
  occupation_type: {
    required: true,
    type: String,
    trim: true,
  },
  socialMediaLinks: {
    required: true,
    type: String,
    trim: true,
  },
  address: {
    required: true,
    type: String,
    trim: true,
  },
});
const IndividualProfileCompletionModel = mongoose.model(
  "individualProfileCompletion",
  IndividualProfileCompletionSchema
);
module.exports = IndividualProfileCompletionModel;
