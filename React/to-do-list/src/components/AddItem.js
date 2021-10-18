import React, {useState} from 'react';

const AddItem = (props) => {
    const {item, setItem} = props;
    const {complete, setComplete} = props;
    const {tasks, setTasks} = props;

    const submitHandler = (e) =>{
        e.preventDefault();
        setTasks([...tasks, {
            item: item,
            complete: complete,
        }])
    }

    const changeItem = (newItem) =>{
        setItem(newItem);
    }
    return(
        <form onSubmit = {submitHandler}>
            <label>New Task: </label>
            <input type = "text" onChange={(e) => changeItem(e.target.value)}></input>
            <button>Add!</button>
        </form>
    )
}

export default AddItem;