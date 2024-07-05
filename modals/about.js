const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        require: true,
    },
    age: {
        type: Number,
        require:true,
    },
    gender: {
        type: String
    }

});

const userData = mongoose.model("userData", userSchema);

module.exports = userData;