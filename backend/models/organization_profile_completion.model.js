const mongoose = require("mongoose");

const Address = mongoose.Schema({
  city: {
    required: true,
    type: String,
    trim:true

  },
  state: {
    required: true,
    type: String,
    trim:true
  },
  pincode: {
    required: true,
    type: String,
    trim:true
  },
  nation: {
    required: true,
    type: String,
    trim:true
  },
});
const OrganozationProfileCompletionSchema = mongoose.Schema({
  organizationId_mongoID: {
    required: true,
    type: String,
    trim:true
  },
  organizationId: {
    required: true,
    type: String,
    trim:true
  },
  organizationName: {
    required: true,
    type: String,
    trim:true
  },
  email: {
    required: true,
    type: String,
    trim:true
  },
  password: {
    required: true,
    type: String,
    trim:true
  },
  contact_number: {
    required: true,
    type: String,
    trim:true
  },
  location: {
    required: true,
    type: [address],
  },
  waste_requirements: {
    required: true,
    type: String,
    trim:true
  },
  productDeals: {
    required: true,
    type: String,
    trim:true
  },
  socialMediaLinks: {
    required: true,
    type: String,
    trim:true
  },
  websiteLink: {
    required: true,
    type: String,
    trim:true
  },
  typeOfOrganization: {
    required: true,
    type: String,
    trim:true,
    enum:['Cooperative','Private','Self help groups']
  },
});

const OrganozationProfileCompletionModel= mongoose.model(
    "OrganozationProfileCompletion",
    OrganozationProfileCompletionSchema
)
module.exports = OrganozationProfileCompletionModel;
