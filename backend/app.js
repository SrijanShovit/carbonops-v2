const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const connectDB = require('./config/db.config');
connectDB();
app.get('/',(req,res) => {
    res.send('hello world')
});
const UseRouter=require('./routers/example.routes')
app.use(express.json());
app.use("/ping",UseRouter)
app.listen(3000,()=>{
    console.log('server is running');
    
})
