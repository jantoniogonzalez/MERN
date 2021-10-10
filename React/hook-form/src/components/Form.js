import React, {useState} from 'react';

const Form = (props) =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
    

    const subForm = (e) => {
        e.preventDefault();
        const newForm = {firstName, lastName, email, password, passwordConfirmation};
    }
    
    const firstNameReq = (e) =>{
        setFirstName(e.target.value);
        firstName.length < 2 ?
        setFirstNameError("This field requires more than 2 characters") :
        setFirstNameError("");
    }
    const lastNameReq = (e) =>{
        setLastName(e.target.value);
        lastName.length < 2 ?
        setLastNameError("This field requires more than 2 characters") :
        setLastNameError("");
    }
    const emailReq = (e) =>{
        setEmail(e.target.value);
        email.length < 2 ?
        setEmailError("This field requires more than 2 characters") :
        setEmailError("");
    }
    const passwordReq = (e) =>{
        setPassword(e.target.value);
        password.length < 8 ?
        setPasswordError("This field requires more than 8 characters") :
        setPasswordError("");
    }
    const passwordConfirmationReq = (e) =>{
        setPasswordConfirmation(e.target.value);
        passwordConfirmation != password ?
        setPasswordConfirmationError("passwords need to match") :
        setPasswordConfirmationError("");
    }
    return(
        <form onSubmit = { subForm }>
            <div>
                <label>First Name</label>
                <input type = "text" value={firstName} onChange={ firstNameReq }></input>
                <p>{ firstNameError }</p>
            </div>
            <div>
                <label>Last Name</label>
                <input type = "text" value={lastName} onChange={ lastNameReq }></input>
                <p>{ lastNameError }</p>
            </div>
            <div>
                <label>Email</label>
                <input type = "text" value={email} onChange={ emailReq }></input>
                <p>{ emailError }</p>
            </div>
            <div>
                <label>Password</label>
                <input type = "text" value={password} onChange={ passwordReq }></input>
                <p>{ passwordError }</p>
            </div>
            <div>
                <label>Confirm Password</label>
                <input type = "text" value={passwordConfirmation} onChange={ passwordConfirmationReq }></input>
                <p>{ passwordConfirmationError }</p>
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