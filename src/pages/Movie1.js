import '../App.css';

import video from '../videos/2023recap.mp4';
import nottinghill from '../images/nottinghill.jpg';
import fiftyfirstdates from '../images/50firstdates.jpg';
import mustbelove from '../images/mustbelove.jpg';
import rewind from '../images/rewind.jpg';

import { Link } from 'react-router-dom';

function Movie1() {
  return (
    <div className = "movie-check">
      <div className = "overlay"></div>
      <video src = {video} autoPlay loop muted className = 'video'></video>

      <div className = "movie-check-content">
        <img className = "movie-poster" src = {nottinghill} alt = "nottinghill"></img> 
        <h5>Are you sure you want to watch this movie?</h5>
        <div className = "buttons">
          <button><Link className = 'button' to='/personal-website/confirm'>Yes</Link></button>
          <button><Link className = 'button' to='/personal-website/yes'>No</Link></button>
        </div>
      </div>

      <div className = "buttons">
        <button><Link className = 'button' to='/personal-website/yes'>Back</Link></button>
      </div>
    </div>
  );
}

export default Movie1;