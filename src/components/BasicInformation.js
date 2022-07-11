import './BasicInformation.css';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
function BasicInformation() {
    return (
        <div className='MainDiv'>
            <h1>David Rábel</h1>
            <h2>Blockchain Developer</h2>
            <h3>DOBBY LABS</h3>
            <div className='InsideDiv'>
                <a href="mailto:rabeld97@gmail.com" target="_blank">
                    <button className='EmailButton'>
                        <div className='TextAndIconEmail'><FaEnvelope/>
                            Email
                        </div>
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/david-rabel/" target="_blank">
                    <button className='LinkedInButton'>
                        <div className='TextAndIconLinkedIn'><FaLinkedin/>
                            LinkedIn
                        </div>
                    </button>
                </a>
            </div>
        </div>
        
    );
  }
  
  export default BasicInformation;