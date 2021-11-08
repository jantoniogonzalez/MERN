const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Product name is required"]
    },

    price: {
        type: Number,
        required: [true, "Product price is required"]
    },

    description:{
        type: String,
    }
}, {timestamps: true})


module.exports = mongoose.model('Product', ProductSchema);