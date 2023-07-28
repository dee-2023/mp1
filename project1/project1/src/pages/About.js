import caption from '../img/relax.jpg';
const About = () => {

    return(

        <div className="Col" >
            <div className="text-center Col-6">
                <h2> About Us </h2>
                    <p>In a world inundated with emails, fake news, status updates,
                        smartphones and connected watches, we exist to bring you back 
                        to the moment.
                    </p><br />
                    <p>This is the moment our customer finds balance; when they stop 
                        focusing on what they should be doing and intead focus on what 
                        they want to do.</p>
            </div>
            <div className="Col-6">
                <img src={caption} alt="girl on kayak" />
            </div>


        </div>

    )

}

export default About