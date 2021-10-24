import React from 'react';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import Word from './components/Word';
import Word1 from './components/Word1';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home"/>
        <Word path="/:id"/>
        <Word1 path="/:id/:font/:back"/>
      </Router>
    </div>
  );
}

export default App;
