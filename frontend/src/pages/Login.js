import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import { Container, Card, Form, Button } from 'react-bootstrap';
import apiRequest from '../datafetch/apiRequest'
import Register from './Register'

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Test' + username + " " + password)
/*
    if(username === username && password === password){
        localStorage.setItem('isLog', true);
        navigate('/dashboard');
    } else {
        localStorage.setItem('isLog', false);
        setErrMsg('username and password did not match')
    }};
*/
   //let tokenValue = localStorage.getItem('isLog');
    const objReq = { method: 'POST',
        headers: {
            'Content-Type' : 'application/x-www-form-urlencoded'        
        },
        //body:"$username="+username+"$password="+password,
    }
    const result = await apiRequest('http://localhost:8080/signin', objReq)
    const okresult = await result.json();
    
    if (okresult.code === "success") {
        localStorage.setItem('isLog' , 'true');
    //    localStorage.setItem('token, okresult.accessToken');
        setErrMsg(okresult.msg);
        navigate('/dashboard');
    } else {
        setErrMsg("Something went wrong");
    }
  }
        return (
            <Container className='App-login'>
                <Card className='form-container mtop'>
                    <h3>Login here</h3>
                    <Form onSubmit={handleSubmit} >           
                        <b className='red'>  {errMsg} </b><b />
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="text" 
                            name="username"
                            placeholder="username" />                       
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="password" />   
                    <Button variant="success" type="submit"> Sign in</Button>                   
                    </Form>
                  <p> Don't have an account yet?</p>
                  <Button variant="primary" onClick={()=> navigate({Register})}> Register here</Button>
                </Card>
            </Container>     
        )};
    export default Login;