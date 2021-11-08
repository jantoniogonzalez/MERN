const mongoose = require("mongoose");

const MusicianSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "A musician name is required!"],
        minlength: [2, "A musician name must be at least 2 characters long"]
    },

    image:{
        type: String,
        required: [true, "We need images because we love them!"]
    },

    genre:{
        type: String,
        required: [true, "Musician needs a genre!"],
        enum: [
            "Rock",
            "Rap",
            "Blues",
            "Jazz",
            "R&B",
            "Country",
            "Soul",
            "Classical",
            "Bachata",
            "Metal",
            "Polka",
            "Punk"
        ]
    },

    yearFormed:{
        type: Number
    },

    rating:{
        type: Number,
        max: [10, "No more than 10 for a rating"]
    },

    suitableForKids:{
        type: Boolean
    }

}, {timestamps:true})


const Musician = mongoose.model("Musician", MusicianSchema)

module.exports = Musician;