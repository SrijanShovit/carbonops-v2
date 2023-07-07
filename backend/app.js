const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./config/db.config');
const cors = require("cors");
const UseRouter = require("./routers/example.routes")

connectDB();
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())
app.use("/ping",UseRouter)

app.get('/',(req,res) => {
    res.send('hello world')
});
app.use(express.json());
app.use("/ping",UseRouter)
app.listen(3000,()=>{
    console.log('server is running');
    
})
