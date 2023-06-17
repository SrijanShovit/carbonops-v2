const mongoose = require('mongoose');
const EventRegisteredSchema = mongoose.Schema({
    reg_id:{
        type:String,
        required:true
    },
    individual_id:{
        type:String,
        required:true
    },
    event_id:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email_id:{
        type:String,
        required:true
    },
    phone_no:{
        type:String,
        required:true
    },
    isOffline:{
        type:Boolean,
        required:true
    }


})