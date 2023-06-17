const mongoose = require("mongoose");
const EventTypesSchema=mongoose.Schema({
    online:{
        type:Boolean
    },
    offline:{
        type:Boolean
    },
    carbon_score:{
        type:Number
    },
    feild:{
        type:String
    }
})

const EventDetailsSchema=mongoose.Schema({
    date:{
        type:Date,
    },
    time:{
        type:String
    },
    duration:{
        type:String
    },
    poster:{
        type:String
    }
});
const EventSchema=mongoose.Schema({
    event_id:{
        required: true,
        type: String
    },
    event_name:{
        required: true,
        type: String
    },
    type_of_event:{
        type:[EventTypesSchema]
    },
    event_details:{
        type:[EventDetailsSchema]
    },
    target_audience:{
        type:String
    },
    event_description:{
        type:String
    },
    participation_limit:{
        type:Number
    },
    isoffline:{
        type:Boolean
    },
    enquiry_details:{
        type:String
    },
    organiser_id:{
        type:String
    },
})
const EventModel=mongoose.model("Event",EventSchema);
module.exports=EventModel;