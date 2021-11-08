import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const Product = (props)=>{
    const {id} = props;
    const [product, setProduct] = useState({})
    const deleteProduct = (id)=>{
        axios.delete("http://localhost:8000/api/products/"+ id)
            .then((res)=>{
                console.log(res.data);
                navigate("/")
            })
            .catch((err)=>console.log(err))
    }
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
            .then((res)=>{
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err)=>console.log(err))
    }, [])
    return(
        <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-evenly', flexDirection: 'column'
        }}>

            <h2>{product.title}</h2>
            <Link to={"/"}><h5>Return Home</h5></Link>
            <p>${product.price}</p>
            <p>{product.description}</p>
            <Link to={"/products/edit/"+id}><p>Update Product Information!</p></Link>
            <button onClick={(e)=>{deleteProduct(id)}}>Delete</button>
        </div>
    )
}

export default Product;