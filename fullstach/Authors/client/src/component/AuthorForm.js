import React, { useState } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AuthorForm = (props) => {
    const[name, setName] = useState("");
    const[errors, setErrors] = useState([]);

    const submitHandler = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', {name})
            .then(res=>console.log(res))
            .catch(err=>{
                setErrors(err.reponse.data.errors);
                console.log(err)
            })
    }
    return(
        <div>
            <Link to={"/"}><h5>Return Home</h5></Link>
            <form onSubmit = {submitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Name</label>
                    <input type="text" onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <button>Add Author!</button>
            </form>
        </div>
    )
}

export default AuthorForm;