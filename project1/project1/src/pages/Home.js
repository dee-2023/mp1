import { Button } from 'react-bootstrap';
import './home.css';


const Home = () => {

    return(

        <div className="Container Home bgmain text-center">
            <h2 className='h1 textwhite' >Welcome to the Vacation Island</h2>
            <h4 className="h4 textwhite">A Paradise within Paradise</h4>
            <Button className='btn-success btn-lg '>Plan Your Adventure Now</Button>
        </div>

    );

}

export default Home