import React, { Component } from 'react';
    
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        }
    }
    render() {
    const { firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={()=> {this.setState({ age: age+1})}}>Birthday Button for {firstName} {lastName}</button>
            </div>
)
    }
}
    
export default PersonCard;
