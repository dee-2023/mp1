import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


const Header = () => {

 return(

    <header> 
   
      <Container className="Home bgmain text-center">
         <h2 className='h1 textwhite' >Welcome to the Vacation Island</h2>
         <h4 className="h4 textwhite">A Paradise within Paradise</h4>
      </Container>
      <Navbar bg="light" data-bs-theme="light" className="navbar">
         <Container>
            <Nav activeKey="/home">
               <Nav.Link href="/home">Home</Nav.Link>
               <Nav.Link href="/about">About</Nav.Link>
               <Nav.Link href="/contact">Contact</Nav.Link>
               <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav>  
            <Nav>
               <Nav className="justify-content-end">
               <Nav.Link href="/login">Login</Nav.Link>
            </Nav></Nav>
         </Container>
      </Navbar>
   

    </header>

   );
  

};

export default Header;