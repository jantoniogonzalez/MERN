import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllProducts = (props) =>{
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
            .then((res)=>{
                console.log(res.data);
                setProducts(res.data);
                console.log("State Updated!")
            })
            .catch((err)=>console.log(err))
    }, [])

    return(
        <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'space-evenly', flexDirection: 'column'
        }}>
            <h1>Product List: </h1>
            <Link to={"/add"}><h3>Add a New Product</h3></Link>
            {
                products.map((product, index)=>(
                    <div>
                        <Link to={"/products/"+ product._id}>
                        <p>{product.title}</p>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default AllProducts;