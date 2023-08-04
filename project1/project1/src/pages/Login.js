import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css';




const Login = (props) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
  

    const handleSubmit = (e) => {
        e.preventDefault();        // so the page will not be reloaded causing to lose our state
        console.log(username);

        if(username === 'member' && password === '123456'){
            localStorage.setItem('isLog', 'true');
            navigate('/booking-schedule'); 
    
          } else {
            localStorage.setItem('isLog', 'false');
            setErrMsg('Invalid Username and Password')

    }   }

    useEffect( () => {
        let errLogin = localStorage.getItem('errorInLogin');
        setErrMsg(errLogin);
    }, []);
    
      return (
        <div className='auth-form-container App-login'>
        <h3>Login here</h3>
        <form className="login-form" onSubmit={handleSubmit}>

                <b> {errMsg} </b> <br />
            <label htmlFor="username">Username</label><br />
            <input 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                type="username" 
                placeholder="username" 
            /><br />

            <label htmlFor="password">Password</label><br />
            <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="password" 
            /><br />

            <button> Login </button>
        </form><br />

        <p> Don't have an account yet?</p><button className="link-btn" onClick={() => props.onFormSwitch('register')}> Register here</button>
        </div>

      )


}
export default Login