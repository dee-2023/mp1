import React, { useState } from "react";
import './login.css';
import Login from "./Login";
import Register from "./Register";


const LoginIndex = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        
       
        <div className="App">
            {
               <div className="App">
               {
                 currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
               }
             
             </div>
                
            }
        </div>
    )
}
export default LoginIndex;