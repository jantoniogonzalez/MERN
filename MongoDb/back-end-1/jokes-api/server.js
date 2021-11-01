const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

const jokesSchema =  new mongoose.Schema({
    name: {
        type: String
    },
    theJoke: {
        type: String
    }
}, {timestamps: true})

const Joke = mongoose.model("Joke", jokesSchema)

app.get("/api/jokes",(req, res)=>{
    Joke.find({})
        .then((allJokes)=>{
            console.log(allJokes);
            res.json({theJokes: allJokes});
        })
        .catch((err)=>{
            console.log(err)
        })
        
})

app.post("/api/jokes", (req, res)=>{
    Joke.create(req.body)
        .then((newJoke)=>{
            console.log(newJoke);
            res.json(newJoke);
        })
        .catch((err)=>{
            console.log(err)
        })
})

app.get("/api/jokes/:id",(req, res)=>{
    Joke.findOne({_id: req.params.id})
        .then((oneJoke)=>{
            console.log(oneJoke);
            res.json(oneJoke);
        })
        .catch((err)=>{
            console.log(err)
        })
        
})

app.delete("/api/jokes/:id",(req, res)=>{
    Joke.deleteOne({_id: req.params.id})
        .then((deletedJoke)=>{
            console.log(deletedJoke);
            res.json(deletedJoke);
        })
        .catch((err)=>{
            console.log(err)
        })
        
})

app.listen(8000, ()=>console.log("You have successfully connected to port 8000!"))