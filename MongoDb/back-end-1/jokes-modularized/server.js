const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./controllers/joke.contoller");
require("./models/joke.model");
require("./routes/joke.route")(app);

app.listen(8000, ()=>console.log("You have successfully connected to port 8000!"))