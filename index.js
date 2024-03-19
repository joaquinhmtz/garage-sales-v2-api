const express = require("express"); 
const mongoose = require("mongoose");
require("dotenv").config();
const app = express(); 
const router = express.Router();
const bodyParser = require("body-parser");
const routes = require("./modules/routes")(app, router);
const PORT = process.env.PORT || 5001; 


const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.lwdhw9g.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_CLUSTER}`;

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected Db");
    } catch (error) {
        console.log(error);
    }
}

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', router);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`); 
});

connectDb();

module.exports = app;
