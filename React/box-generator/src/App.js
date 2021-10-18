import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

function App() {
  const [boxList, setBoxList] = useState([]);
  
  return (
    <div className="App">
      <Form boxList = {boxList} setBoxList = {setBoxList}/>
      <Display boxList = {boxList}/>
    </div>
  );
}

export default App;
