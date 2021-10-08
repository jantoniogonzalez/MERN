import React, {useState} from 'react';

const Form = (props) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const subForm = (e) => {
        e.preventDefault();
        const newForm = {firstName, lastName, email, password, passwordConfirmation};
    }
    return(
        <form onSubmit = { subForm }>
            <div>
                <label>First Name</label>
                <input type = "text" value={firstName} onChange={(e)=>
                setFirstName(e.target.value)}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type = "text" value={lastName} onChange={(e)=>
                setLastName(e.target.value)}></input>
            </div>
            <div>
                <label>Email</label>
                <input type = "text" value={email} onChange={(e)=>
                setEmail(e.target.value)}></input>
            </div>
            <div>
                <label>Password</label>
                <input type = "text" value={password} onChange={(e)=>
                setPassword(e.target.value)}></input>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type = "text" value={passwordConfirmation} onChange={(e)=>
                setPasswordConfirmation(e.target.value)}></input>
            </div>
            <div>
                <p>Your Form Data</p>
                <p>First Name  {firstName}</p>
                <p>Last Name   {lastName}</p>
                <p>Email       {email}</p>
                <p>Password    {password}</p>
                <p>Confirm Password {passwordConfirmation}</p>
            </div>
        </form>        
    );
};

export default Form;