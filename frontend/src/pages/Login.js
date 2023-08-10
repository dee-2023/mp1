import React, { useState } from "react";
import { Container, Card, Form, Button } from 'react-bootstrap';
import register from './Register';





export const Login = (props) => {
   
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  

    const handleSubmit = (e) => {
        e.preventDefault();        // so the page will not be reloaded causing to lose our state
        console.log(username);

    }
/*
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
 */   
    return (
        <Container className='App-login'>
            <Card className='form-container'>
                <h3>Login here</h3>
                <Form.Group className="login-form" onSubmit={handleSubmit}>
                <Form.Label htmlFor="username">Username</Form.Label><br />
                <input 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    type="username" 
                    placeholder="username" 
                /><br />

                <Form.Label htmlFor="password">Password</Form.Label><br />
                <input 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="password" 
                /><br />

                <Button variant="success"> Login </Button>
                </Form.Group><br />
            
              <p> Don't have an account yet?</p><Button variant="primary" /*as="a" href="/Register" */ onClick={(e) => props.onFormSwitch({register})}> Register here</Button>
            </Card>
        </Container>

      )


}
export default Login;