const mongoose = require("mongoose");

const Address = mongoose.Schema({
  city: {
    required: true,
    type: String,
  },
  state: {
    required: true,
    type: String,
  },
  pincode: {
    required: true,
    type: String,
  },
  nation: {
    required: true,
    type: String,
  },
});
const OrganozationProfileCompletionSchema = mongoose.Schema({
  organization_id_mongoID: {
    required: true,
    type: String,
  },
  organization_id: {
    required: true,
    type: String,
  },
  organization_name: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  contact_number: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: [address],
  },
  waste_requirements: {
    required: true,
    type: String,
  },
  product_deals: {
    required: true,
    type: String,
  },
  social_media_links: {
    required: true,
    type: String,
  },
  website_link: {
    required: true,
    type: String,
  },
  type_of_organization: {
    required: true,
    type: String,
    enum:['Cooperative','Private','Self help groups']
  },
});

const OrganozationProfileCompletionModel= mongoose.model(
    "OrganozationProfileCompletion",
    OrganozationProfileCompletionSchema
)
module.exports = OrganozationProfileCompletionModel;
