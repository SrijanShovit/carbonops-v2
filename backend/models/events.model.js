const mongoose = require("mongoose");
const EventTypesSchema = mongoose.Schema({
  online: {
    required: true,
    type: Boolean,
  },
  offline: {
    required: true,
    type: Boolean,
  },
  carbon_score: {
    required: true,
    type: Number,
  },
  feild: {
    required: true,
    type: String,
  },
});

const EventDetailsSchema = mongoose.Schema({
  date: {
    required: true,
    type: Date,
  },
  time: {
    required: true,
    type: String,
    trim: true,
  },
  duration: {
    required: true,
    type: String,
    trim: true,
  },
  poster: {
    required: true,
    type: String,
    trim: true,
    validate: [ isURL, 'Please provide a valid Url' ]
  },
});
const EventSchema = mongoose.Schema({
  eventId: {
    required: true,
    type: String,
    trim: true,
  },
  eventName: {
    required: true,
    type: String,
    trim: true,
  },
  typeOfEvent: {
    required: true,
    type: [EventTypesSchema],
  },
  eventDetails: {
    required: true,
    type: [EventDetailsSchema],
  },
  targetAudience: {
    required: true,
    type: String,
    trim: true,
  },
  eventDescription: {
    required: true,
    type: String,
    trim: true,
  },
  participationLimit: {
    required: true,
    type: Number,
    trim: true,
  },
  isoffline: {
    required: true,
    type: Boolean,
  },
  enquiryDetails: {
    required: true,
    type: String,
    trim: true,
  },
  organiserId: {
    required: true,
    type: String,
    trim: true,
  },
});
const EventModel = mongoose.model("Event", EventSchema);
module.exports = EventModel;
