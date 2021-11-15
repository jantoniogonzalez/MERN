const { respose, request, response } = require("express");
const Author = require('../models/author.model');

module.exports = {
    findAllAuthors: (request, respose) => {
        Author.find({})
            .then((allAuthors)=>{
                console.log(allAuthors);
                respose.json(allAuthors);
            })
            .catch((err)=>{
                console.log(err);
                respose.json({error: "There was an error with findAllAuthors"});
            })
    },
    findOneAuthor: (request, respose) => {
        Author.findOne({_id: request.params.id})
            .then((oneAuthor)=>{
                console.log(oneAuthor);
                respose.json(oneAuthor);
            })
            .catch((err)=>{
                console.log(err);
                respose.json({error: "There was an error with findOneAuthor"});
            })
    },
    createAuthor: (request, respose) => {
        Author.create(request.body)
            .then((newAuthor)=>{
                console.log(newAuthor);
                respose.json(newAuthor);
            })
            .catch((err)=>{
                console.log({error: "There was an error with createAuthor", err: err});
                response.status(400).json(err);
            })
    },
    updateAuthor: (request, respose) => {
        Author.findOneAndUpdate(
            {_id: request.params.id},
            request.body,
            {new: true, runValidators: true}
            )
            .then((updatedAuthor)=>{
                console.log(updatedAuthor);
                respose.json(updatedAuthor);
            })
            .catch((err)=>{
                console.log({error: "There was an error with updateAuthor", err: err});
                response.status(400).json(err);
            })
    },
    deleteAuthor: (request, respose) => {
        Author.deleteOne({_id: request.params.id})
            .then((deletedAuthor)=>{
                console.log(deletedAuthor);
                respose.json(deletedAuthor);
            })
            .catch((err)=>{
                console.log(err);
                respose.json({error: "There was an error with deleteAuthor"});
            })
    }
}