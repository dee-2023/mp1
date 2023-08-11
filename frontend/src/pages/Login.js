import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Card, Form, Button } from 'react-bootstrap';

    const Login = ()=>{
        const navigate = useNavigate();
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [errMsg, setErrMsg] = useState('');
         
        const handleSubmit = async (e)=>{
            e.preventDefault();
            console.log('Test ' + username + "  " + password)
    
            if(username === 'admin' && password === '123456'){
                localStorage.setItem('isLog', 'true');
                navigate('/booking-schedule'); 
    
            } else {
                localStorage.setItem('isLog', 'false');
                setErrMsg('Username and Password does not match')
            }
    
  
        }
    
        useEffect( ()=> {
            let errLogin = localStorage.getItem('errorInLogin');
            setErrMsg(errLogin);
        }, []);
    
    
    
        return (
            <Container className='App-login'>
                <Card className='form-container'>
                    <h3>Login here</h3>
                    <Form onSubmit={handleSubmit} >           
                        <b>  {errMsg} </b><b />
                        <Form.Label htmlFor="username">Username</Form.Label>
                        <Form.Control
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            type="username" 
                            placeholder="username" 
                        />
                        
                    <Form.Label htmlFor="password">Password</Form.Label>
                    <Form.Control
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder="password" 
                    />
    
                    <Button variant="success" type="submit"> Login </Button>
                    
                    </Form>
                  <p> Don't have an account yet?</p><Button variant="primary" onClick={()=> navigate('register')}> Register here</Button>
                </Card>
            </Container>  
    
    
        )
    
    
    };

    export default Login;