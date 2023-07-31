import '../App.css';
import sungit from '../images/sungit.jpeg';
import { Link } from 'react-router-dom';

function No() {
  return (
    <div className = "no">
      <img src = {sungit} alt = "" />
      <h1>Sorry, wrong answer &#128546;</h1>
      <button><Link className = 'button' to='/'>Try again! &#128513;</Link></button>
    </div>
  );
}

export default No;