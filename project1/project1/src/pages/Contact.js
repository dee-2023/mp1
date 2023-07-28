import 'bootstrap/dist/css/bootstrap.min.css';
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import './contact.css';


const Contact = () => {

    return(
        <article className="Col">
            <h1 className="mt-5 text-center">We’d Love to Hear From You, Get In Touch With Us!</h1>
            <hr />
            <aside className="Col-md-3">
                <div id="contact-info-widget" className='asideright'>
                    <h6>Contact Info</h6><br /><br />
                    <p>Vacation Island</p>
                    <p>Phone: +63 909 123 4567</p>
                    <p>Mobile: +63 919 999 8888</p>
                    <p>Email: info@vacationisland.com</p>
                    <p>Web: www.vacationisland.com</p>
                </div>
            </aside>
            <section className="Col-md-9">
                <Form className="w-50">
                    <legend>Contact Us</legend>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="firstName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Name(Required)" required />
                        </Form.Group>
                        <Form.Group as={Col} controlId="lastName">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="text" placeholder="Email(Required)" />
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Subject:</Form.Label>
                        <Form.Control type="email" placeholder="Subject" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label>Message:</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Write your message here..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </section>
            <hr />
        </article>
       

            

    )

}

export default Contact