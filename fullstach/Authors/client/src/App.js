import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import { Router } from '@reach/router';
import AllAuthors from './component/AllAuthors';
import AuthorForm from './component/AuthorForm';
import UpdateAuthor from './component/UpdateAuthor';

function App() {
  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Router>
        <AllAuthors path='/'/>
        <AuthorForm path="/add"/>
        <UpdateAuthor path="/authors/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
