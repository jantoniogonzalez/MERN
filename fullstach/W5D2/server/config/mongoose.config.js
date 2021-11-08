const mongoose = require("mongoose");

const dbName = "musicians";


mongoose.connect("mongodb://localhost/"+dbName, {
    useNewUrlParser: true,
    useunifiedTopology: true
})
    .then(()=>{
        console.log("YOu are connected to the database called "+dbName)
    })
    .catch((err)=>{
        console.log("There was an error connecting to the database called "+dbName)
        console.log(err);
    })