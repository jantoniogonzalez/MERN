import React, { useState } from 'react';

const PersonCard = (props) =>{
    const [isAge , setIsAge] = useState(props.age);
    const birthday = (e) =>{
        setIsAge(isAge+1);
    }
    return(
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {isAge}</p>
            <p>Hair Color: {props.hairColor}</p>
            <button onClick={birthday}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    )
}

export default PersonCard;
