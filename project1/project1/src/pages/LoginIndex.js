import React, { useState } from "react";
import './login.css';
import Login from "./Login";
import Register from "./Register";
import { Routes, Route } from 'react-router-dom';

const LoginIndex = () => {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        
       
        <div className="App">
            {
                currentForm === "login" ? 
                <Routes>
                    <Route element={<LoginIndex />}>
                    <Route path='/login' element={<Login onFormSwitch={toggleForm} />}></Route></Route></Routes>

                : 
                <Routes>
                    <Route element={<LoginIndex />}>
                    <Route path="/register" element={<Register /> }></Route></Route></Routes>
               
                
            }
        </div>
    )
}
export default LoginIndex;