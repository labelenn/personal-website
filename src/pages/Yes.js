import '../App.css';
import pogi from '../images/pogi.jpg';
import { Link } from 'react-router-dom';

function Yes() {
  return (
    <div className = "yes">
      <img style = {{"width": "400px"}} src = {pogi} alt = ""/>
      <h1>Best and only answer! &#128525;</h1>
      <h2>Our virtual wedding is on our anniversary date!</h2>
      <h3>04/08/2023</h3>
      <h4>Check your email for the proposal &#128141;</h4>
      <h4>Don't be late &#128529;</h4>
     
      <button><Link className = 'button' to='/'>Home</Link></button>
 
    </div>
  );
}

export default Yes;