const Musician = require("../models/musician.model");


module.exports = {
    findAllMusicians: (req, res) =>{
        Musician.find({})
            .then((allMusicians)=>{
                console.log(allMusicians);
                res.json(allMusicians);
            })
            .catch((err)=>{
                console.log("find all musicians failed");
                res.json({message:"Something went wrong in findAllMusicians", error: err});
            })
    },

    findOneMusician: (req, res)=>{
        Musician.findOne({_id: req.params.id})
            .then((oneMusician)=>{
                console.log(oneMusician);
                res.json(oneMusician);
            })
            .catch((err)=>{
                console.log("find one musician failed");
                res.json({message:"Something went wrong in findOneMusician", error: err});
            })
    },

    createNewMusician: (req, res)=>{
        Musician.create(req.body)
            .then((newMusician)=>{
                console.log(newMusician);
                res.json(newMusician);
            })
            .catch((err)=>{
                console.log("Something went wrong in createNewMusician");
                res.status(400).json(err);
            })
    },

    updateMusician: (req, res)=>{
        Musician.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {new: true, runValidators: true}
        )
                .then((updatedMusician)=>{
                    console.log(updatedMusician);
                    res.json(updatedMusician);
                })
                .catch((err)=>{
                    console.log("Update musician failed");
                    res.json({ message: "Something went wrong in updateMusician", error: err})
                })
    },

    deleteMusician: (req, res)=>{
        Musician.deleteOne({_id: req.params.id})
            .then((deletedMusician)=>{
                console.log(deletedMusician);
                res.json(deletedMusician);
            })
            .catch((err)=>{
                console.log("Delete musician failed");
                res.json({ message: "Something went wrong in deleteMuscian", error: err})
            })
    }
}