import '../App.css';

import video from '../videos/2023recap.mp4';
import nottinghill from '../images/nottinghill.jpg';
import fiftyfirstdates from '../images/50firstdates.jpg';
import mustbelove from '../images/mustbelove.jpg';
import rewind from '../images/rewind.jpg';

import { Link } from 'react-router-dom';

function Confirm() {
  return (
    <div className = "confirm">
      <div className = "overlay"></div>
      <video src = {video} autoPlay loop muted className = 'video'></video>
      
      <div className = "confirm-content">
        <h3>Okay, mahal!</h3>
        <h5>A confirmation email should be sent to you containing more details about our date.</h5>
        <h5>Can't wait! &#129392;</h5>
      </div>

      <div className = "buttons">
        <button><Link className = 'button' to='/'>Home</Link></button>
      </div>
    </div>
  );
}

export default Confirm;