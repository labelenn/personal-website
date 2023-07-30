import '../App.css';
import sungit from '../images/sungit.jpeg';

function No() {
  return (
    <div className = "no">
      <img src = {sungit} alt = "" />
      <h1>Sorry, wrong answer &#128546;</h1>
      <button className = "button" onClick = {() => {window.location.href = "/"}}>Try again! &#128513;</button>
    </div>
  );
}

export default No;