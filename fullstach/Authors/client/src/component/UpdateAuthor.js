import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const UpdateAuthor = (props) =>{
    const {id} = props;
    const [name, setName] = useState("");
    const [errors, setErrors] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors/"+id)
            .then((res)=>{
                console.log(res);
                setName(res.data.name);
            })
            .err(err=>{
                setErrors(err.reponse.data.errors);
                console.log(err)
            })
    })

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/authors/"+ id, {name})
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={submitHandler}>
            <h4>Update Author</h4>
            <Link to={"/"}><h5>Return Home</h5></Link>
            <p>
                <label>Name</label><br/>
                <input value={name} type="text" onChange = {(e)=>setName(e.target.value)}/>
            </p>
            <button>Update Author</button>
        </form>
    )
}

export default UpdateAuthor;