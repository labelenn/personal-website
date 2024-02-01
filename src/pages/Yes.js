import '../App.css';

import video from '../videos/2023recap.mp4';
import nottinghill from '../images/nottinghill.jpg';
import fiftyfirstdates from '../images/50firstdates.jpg';
import mustbelove from '../images/mustbelove.jpg';
import rewind from '../images/rewind.jpg';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Yes() {

  return (
    <div className = "yes">
      <div className = "overlay"></div>
      <video src = {video} autoPlay loop muted className = 'video'></video>
      
      <div className = "yes-content">
        <h3>YES! IT'S A DATE!</h3>
        <h5>What better way to spend it than watching a movie genre we both love?</h5>
        <h5>Choose one of the movies below, mahal &#129392;</h5>
      </div>

      <div className = "movies-1">
        <div className = "movie">
          <img className = "movie-poster" src = {nottinghill} alt = "nottinghill" />
          <Link to='/personal-website/movie1'>Notting Hill</Link>
        </div>
        <div className = "movie">
          <img className = "movie-poster" src = {fiftyfirstdates} alt = "50firstdates" />
          <Link to='/personal-website/movie2'>50 First Dates</Link>
        </div>
      </div>


      <div className = "movies-2">
        <div className = "movie">
          <img className = "movie-poster" src = {mustbelove} alt = "mustbelove" />
          <Link to='/personal-website/movie3'>Must Be Love</Link>
        </div>
        <div className = "movie">
          <img className = "movie-poster" src = {rewind} alt = "rewind" />
          <Link to='/personal-website/movie4'>Rewind</Link>
        </div>
      </div>

      <div className = "buttons">
        <button><Link className = 'button' to='/'>Home</Link></button>
      </div>
    </div>
  );
}

export default Yes;