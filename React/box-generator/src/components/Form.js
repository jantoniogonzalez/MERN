import React, {useState} from 'react';

const Form = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0+"px");
    const {boxList, setBoxList} = props;

    const submitHandler = (e) =>{
        e.preventDefault();
        setBoxList([...boxList, {
            color: color,
            width: width,
        }])
    }

    const changeColor = (newColor) =>{
        setColor(newColor);
    }
    const changeWidth = (newWidth) =>{
        setWidth(newWidth);
    }
    return(
        <div>
            <h1>Box Generator</h1>
            <form onSubmit = {submitHandler}>
                <label>Color: </label>
                <input type = "text" onChange={(e)=>changeColor(e.target.value)}></input>
                <label>Width: </label>
                <input type = "number" onChange={(e)=>changeWidth(e.target.value + "px")}></input>
                <button>Create!</button>
            </form>
        </div>
    )
}

export default Form;