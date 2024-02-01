import '../App.css';

import video from '../videos/2023recap.mp4';
import nottinghill from '../images/nottinghill.jpg';
import fiftyfirstdates from '../images/50firstdates.jpg';
import mustbelove from '../images/mustbelove.jpg';
import rewind from '../images/rewind.jpg';

import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

function Movie4() {
  const form = useRef();

  var parameters = {
    movie: "Rewind"
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send('service_d9nsrgj', 'template_cm2tlfg', parameters, 'b6wBk_n2kI85pWpkZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className = "movie-check">
      <div className = "overlay"></div>
      <video src = {video} autoPlay loop muted className = 'video'></video>

      <div className = "movie-check-content">
        <img className = "movie-poster" src = {rewind} alt = "rewind"></img> 
        <h5>Are you sure you want to watch this movie?</h5>
        <div className = "buttons">
          <button onClick = {sendEmail}><Link className = 'button' to='/personal-website/confirm'>Yes</Link></button>
          <button><Link className = 'button' to='/personal-website/yes'>No</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Movie4;