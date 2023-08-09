import { Button, Container, Card, CardGroup } from 'react-bootstrap';
import './home.css';
import '../img/relax.jpg';
import hammock from '../img/hammock.png';
import relax from '../img/relax.jpg';
import elNidoHead from '../img/elnidohead.png';


const Home = () => {

    return(
    <Container className="headerimage">
        <Container className="text-center">
            <h1 className="xperience" >Experience our island resorts</h1>
            
            <Button className='btn-success btn-lg'>Plan Your Adventure Now</Button>
        </Container>
        <CardGroup>
            <Card className='m-3'>
                <Card.Img variant="top" src={hammock}  />
                <Card.Body>
                    <Card.Title>Tour A</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-into additional content. This content is a little bit longer.
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>
            </Card>

            <Card className='m-3'>
                <Card.Img variant="top" src={elNidoHead} />
                <Card.Body>
                    <Card.Title>Tour B</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to additional content.{' '}
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>  
            </Card>

            <Card className='m-3'>
                <Card.Img variant="top" src={relax} />
                <Card.Body>
                    <Card.Title>Tour C</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                    </Card.Text>
                    <Button variant="info">Get Qoute</Button>
                </Card.Body>       
            </Card>
        </CardGroup>
    </Container>

    );


}

export default Home