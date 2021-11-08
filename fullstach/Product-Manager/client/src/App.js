import React, {useEffect} from 'react';
import axios from 'axios';
import './App.css';
import ProductForm from './component/ProductForm';
import AllProducts from './component/AllProducts';
import { Router } from '@reach/router';
import Product from './component/Product';
import UpdateProduct from './component/UpdateProduct';

function App() {

  useEffect(()=>{
    axios.get("http://localhost:8000/api/products")
      .then((res)=>{
        console.log(res.data);
      })
      .catch((err)=>console.log(err))
  }, [])

  return (
    <div className="App">
      <Router>
        <AllProducts path="/"/>
        <ProductForm path="/add"/>
        <Product path="/products/:id"/>
        <UpdateProduct path="/products/edit/:id"/>
      </Router>
    </div>
  );
}

export default App;
