import MyPhoto from "../Images/photo.jpeg"
import './HeaderPicture.css';
function HeaderPicture() {
    return (
        <img src = {MyPhoto} alt="MyPhoto" className="HeaderProfilePicture"></img>
    );
  }
  
  export default HeaderPicture;