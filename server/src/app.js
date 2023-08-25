const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./routes/index");

const app = express();

//Midleware and Cors
app.disable("x-powered-by");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

/* {
    origin: (origin, callback)=>{
        const ACCEPTED_ORIGINS = {

        }

        if(ACCEPTED_ORIGINS.includes(origin)){
            return callback(null, true)
        }

        if(!origin){
            return callback(null, true)
        }

        return callback(new Error('Not allowed by Cors'))
    }} */

//Router
app.use(mainRouter);

module.exports = app;
