import HeaderPicture from './HeaderPicture';
import BasicInformation from './BasicInformation';
import AboutUser from './AboutUser';
import Footer from './Footer';
import './MainCard.css';
function MainCard() {
    return (
        <div className='DivCard'>
            <HeaderPicture/>
            <BasicInformation/>
            <AboutUser/>
            <Footer/>
        </div>
    );
  }
  
  export default MainCard;