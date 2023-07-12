const mongoose = require("mongoose");
require('dotenv').config();
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify: false,
    }).then(()=>{
      console.log("Database Connected!!");
    }).catch((err)=>{
      console.log("Fail to connect Database!!");
      console.log(err);
    })
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
