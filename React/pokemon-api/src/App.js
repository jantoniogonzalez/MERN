import React, { useState, useEffect } from 'react'
import './App.css';
import PokeBody from './components/PokeBody';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <PokeBody/>
    </div>
  );
}

export default App;
