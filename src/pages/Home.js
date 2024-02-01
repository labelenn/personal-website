import '../App.css';
import { Link } from 'react-router-dom';
import video from '../videos/2023recap.mp4';

function Home() {
  return (
    <div>
      <div className = "overlay"></div>
      <video src = {video} autoPlay loop muted className = 'video'></video>
      
      <div className = "content">
        <div className = "question">
          <h3>Hi, my mahal!</h3>
          <h5>Will you be my valentine again and make me the happiest man on 14/02/2024? &#129392;</h5>
        </div>
        <div className = 'buttons'>
          <button><Link className = "button" to='/personal-website/yes'>Yes</Link></button> 
          <button><Link className = "button"to='/personal-website/no'>No</Link></button>
        </div>
      </div>
          
    </div>
  );
}

export default Home;