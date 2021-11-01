const mongoose = require('mongoose');

const jokesSchema =  new mongoose.Schema({
    name: {
        type: String
    },
    theJoke: {
        type: String
    }
}, {timestamps: true})

const Joke = mongoose.model("Joke", jokesSchema)

module.exports = Animal;