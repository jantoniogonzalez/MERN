import React, {useState} from 'react';
import './App.css';
import AddItem from './components/AddItem';
import Display from './components/Display';
import Header from './components/Header';

function App() {
  const [tasks, setTasks] = useState([]);
  const [complete, setComplete] = useState(false);
  const [item, setItem] = useState("");

  return (
    <div className="App">
      <Header/>
      <AddItem tasks = {tasks} setTasks = {setTasks} complete = {complete} setComplete = {setComplete} item = {item} setItem = {setItem}/>
      <Display tasks = {tasks} setTasks = {setTasks} complete = {complete} setComplete = {setComplete} item = {item} setItem = {setItem}/>
    </div>
  );
}

export default App;
