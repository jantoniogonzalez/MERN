const { response, request } = require("express")
const Product  = require('../models/product.model');

module.exports = {
    findAllProducts: (request, response) => {
        Product.find({})
            .then((allProducts)=>{
                console.log(allProducts);
                response.json(allProducts);
            })
            .catch((err)=>{
                console.log(err);
                response.json({error: "there was an error with findAllProducts"});
            })
    },

    findOneProduct: (request, response) => {
        Product.findOne({_id: request.params.id})
            .then((oneProduct)=>{
                console.log(oneProduct);
                response.json(oneProduct);
            })
            .catch((err)=>{
                console.log(err);
                response.json({error: "there was an error with findOneProduct"});
            })
    },

    createProduct: (request, response) => {
        Product.create(request.body)
            .then((newProduct)=>{
                console.log(newProduct);
                response.json(newProduct);
            })
            .catch((err)=>{
                console.log({error: "there was an error with findOneProduct", err: err});
                response.status(400).json(err);
            })
    },

    updateProduct: (request, response) => {
        Product.findOneAndUpdate(
            {_id: request.params.id},
            request.body,
            {new: true, runValidators: true}
        )
            .then((updatedProduct)=>{
                console.log(updatedProduct);
                response.json(updatedProduct)
            })
            .catch((err)=>{
                console.log(err);
                response.json({error: "there was an error with updateProduct"});
            })
    },

    deleteProduct: (request, response) =>{
        Product.deleteOne({_id: request.params.id})
            .then((deletedProduct)=>{
                console.log(deletedProduct);
                response.json(deletedProduct);
            })
            .catch((err)=>{
                console.log(err);
                response.json({error: "there was an error with deleteProduct"})
            })
    }
}