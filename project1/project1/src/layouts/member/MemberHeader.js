import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const AdminHeader = () => {

 return(

   <header> 
   <Navbar bg="dark" data-bs-theme="dark">
      <Container>
         <Nav>
            <Nav.Link href="/booking-schedule">Book a Schedule</Nav.Link>
            <Nav.Link href="/online-shop">Shop</Nav.Link>

         </Nav>
      </Container>
   </Navbar>

 </header>

/*    <div className='admin-header'> 

     <div> Logo </div>
      
           <Link to="/booking-schedule"> Booking Schedule </Link> 
           <Link to="/online-shop"> Online Shop </Link> 

    </div>
    */

   )
  

}

export default AdminHeader;