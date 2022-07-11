import './Footer.css';
import { FaTwitter,FaFacebook,FaInstagram,FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <div className='FooterLinks'>
            <a href="https://twitter.com/DavidRbel2" target="_blank">
                <button className='buttoninfooter'><FaTwitter/></button>
            </a>
            <a href="https://www.facebook.com/david.rabel.9/" target="_blank">
                <button className='buttoninfooter'><FaFacebook/></button>
            </a>
            <a href="https://www.instagram.com/rabeles11/" target="_blank">
                <button className='buttoninfooter'><FaInstagram/></button>
            </a>
            <a href="https://github.com/rabeles11/" target="_blank">
                <button className='buttoninfooter'><FaGithub/></button>
            </a>
        </div>
    );
  }
  
  export default Footer;