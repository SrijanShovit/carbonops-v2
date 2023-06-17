const mongoose = require('mongoose');
const EventRegisteredSchema = mongoose.Schema({
    regId:{
        type:String,
        required:true
    },
    individualId:{
        type:String,
        required:true
    },
    eventId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    emailId:{
        type:String,
        required:true,
        validate: [validateEmail, 'Please fill a valid email address'],
        trim:true
    },
    phoneNo:{
        type:String,
        required:true,
        trim:true

    },
    isOffline:{
        type:Boolean,
        required:true
    }


})