const mongoose = require('mongoose');

const dbName = "jokes";
mongoose.connect("mongodb://localhost/"+dbName  ,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>{
        console.log("you are connected to the $dbName database!")
    })
    .catch((err)=>{
        console.log(err);
    })