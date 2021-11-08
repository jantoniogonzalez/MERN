import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const UpdateProduct = (props) => {
    const {id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");   

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+ id)
        .then((res)=>{
            console.log(res);
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
        .catch(err=>console.log(err))
    }) 

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/products/"+ id, {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }

    return (
        <form onSubmit={submitHandler}>
            <h1>Add a new product!</h1>
            <Link to={"/"}><h5>Return Home</h5></Link>
            <p>
                <label>Name</label><br/>
                <input value={title} type="text" onChange = {(e)=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input value={price} type="number" onChange = {(e)=>setPrice(e.target.value)}/>
            </p>
            <p>
                <label>Description</label><br/>
                <input value={description} type="text" onChange = {(e)=>setDescription(e.target.value)}/>
            </p>
            <button>Update Product!</button>
        </form>
    )
}
export default UpdateProduct;