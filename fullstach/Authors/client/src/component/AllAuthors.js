import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Link, navigate} from '@reach/router';

const AllAuthors = (props) =>{
    const [authors, setAuthors] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:8000/api/authors")
            .then((res)=>{
                console.log(res.data);
                setAuthors(res.data);
                console.log("State Updated!")
            })
            .catch((err)=>console.log(err))
    }, [])

    return(
        <div>
            <Link to="/add">Add Author!</Link>
            <h3>We have quotes by: </h3>
            <table>
            {
                authors.map((author, index) => (
                    <tr>
                        <Link>
                            <td>{authors.name}</td>
                        </Link>
                        <td>
                            <Link to={"/authors/edit/"+author._id}>Edit</Link>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))
            }
            </table>
        </div>
    )
}

export default AllAuthors;