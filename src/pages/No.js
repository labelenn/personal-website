import '../App.css';
import sungit from '../images/sungit.jpeg';
import video from '../videos/2023recap.mp4';
import { Link } from 'react-router-dom';

function No() {
  return (
    <div className = "no">
      <div className = "overlay"></div>
      <video src = {video} autoPlay loop muted className = 'video'></video>
      
      <img src = {sungit} alt = "" />
      <h1>Sorry, wrong answer &#128546;</h1>
      <button><Link className = 'button' to='/'>Try again! &#128513;</Link></button>
    </div>
  );
}

export default No;