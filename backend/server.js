const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors")
const bodyparser = require("body-parser")

const app = express()
require("dotenv").config();

const PORT = process.env.PORT || 8070

app.use(cors());
app.use(bodyparser.json());
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    //useCreateIndex: true,
    useNewUrlParser : true,
    //useUnifiedTopologyL : true,
    //useFindAndModify : false
})

const connection = mongoose.connection;
connection.once("open",() =>{
    console.log("Mongodb Connection Successfull");
})

const userRouter = require("./routes/users.js");
const productRouter = require("./routes/products.js");

app.use("/product",productRouter)
app.use("/user",userRouter)

app.listen(PORT, ()=>{
    console.log(`Server is up and running in port ${PORT}`)
})
