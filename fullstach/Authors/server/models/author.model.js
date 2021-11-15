const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "An author needs a name"],
        minLength: [3, "This field must be at least 3 characters long"]
    }
}, {timestamps: true})

module.exports = mongoose.model('Author', AuthorSchema);