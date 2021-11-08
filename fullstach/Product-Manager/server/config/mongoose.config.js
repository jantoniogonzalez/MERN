const mongoose = require("mongoose");

const dbName = "products";


mongoose.connect("mongodb://localhost/"+dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("You are connected to the database called "+dbName)
    })
    .catch((err)=>{
        console.log("There was an error connecting to the database called "+dbName)
        console.log(err);
    })