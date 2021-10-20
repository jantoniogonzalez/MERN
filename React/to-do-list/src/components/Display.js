import React, {useState} from 'react';

const Display = (props) => {
    const [crossed, setCrossed] = useState("none")
    const {item, setItem} = props;
    const {tasks, setTasks} = props;
    const {complete, setComplete} = props;

    const completeItem = (taskCompleted) =>{
        {
            setTasks(tasks.filter((task)=>{
                return task.complete = true
            })) 
        }
    }
    const deleteTask = (taskToDelete) =>{
        setTasks(tasks.filter((task)=>{
            return task.item !== taskToDelete;
        }))
    }
    return(
        <div>
            {
                tasks.map((task, index) =>(            
                    <div style={{
                        display: "flex", border: "solid 1px black", margin: "10px", flexWrap:"wrap", alignItems:"center", padding:"0px 10px", borderRadius:"8px", justifyContent:"space-between"
                    }}>
                        {
                            task.complete === true?
                            <p style={{
                                textDecoration:"line-through"
                            }}>{task.item}</p>
                            : <p>{task.item}</p>
                        }
                        <div>
                            <input type = "checkbox" onClick = {(e)=>completeItem(e.target.id)}></input>
                            <button onClick={(e)=>deleteTask(task.item)}>Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Display