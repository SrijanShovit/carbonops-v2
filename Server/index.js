const express = require("express");
const app = express();
var cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello World");
});
//commect the database
require("./config/database").connect();

//import and exports the routes
const user = require("./routes/user");
app.use("/api/v1", user);

app.listen(PORT, () => console.log(` Server is running on port ${PORT} `));
