const mongoose = require("mongoose");
const IndividualProfileCompletionSchema = mongoose.Schema({
  individual_mongodb_id: {
    required: true,
    type: String,
  },
  profile_image: {
    type: String,
  },
  dob: {
    required: true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  occupation_type: {
    required: true,
    type: String,
  },
  social_media_links: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
});
const IndividualProfileCompletionModel= mongoose.model(
  "individualProfileCompletion",
  IndividualProfileCompletionSchema
);
module.exports = IndividualProfileCompletionModel;