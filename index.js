const express = require("express");

const { connectMongoDb } = require('./connection');

const bodyParser = require("body-parser");

const app = express();
const PORT = 7001;

app.use(bodyParser.json())

connectMongoDb("mongodb://127.0.0.1:27017/PracticeData")
    .then(() => console.log("MongoDB Connected"))
    .catch(() => console.log("MongoDB Error"));

const userRoutes = require("./routes/userRoutes");

app.use('/users', userRoutes);

app.listen(PORT, () => {
    console.log("server started");
});