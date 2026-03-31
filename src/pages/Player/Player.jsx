import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'
import trailerLinks from '../../../backend/trailerLinks.js'

import now_playing_data from '../../../backend/nowPlaying.js'
import popular_data from '../../../backend/popular.js'
import top_rated_data from '../../../backend/topRated.js'
import upcoming_data from '../../../backend/upcoming.js'

const Player = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  const [movieData, setMovieData] = useState({
    title: '',
    original_title: '',
    release_date: '',
    vote_average: 0,
    popularity: 0,
    overview: ''
  });

  useEffect(() => {
    // Combine all local fallback data
    const allGames = [
      ...now_playing_data,
      ...popular_data,
      ...top_rated_data,
      ...upcoming_data
    ];
    
    // Find the specific movie
    const foundMovie = allGames.find(movie => String(movie.id) === String(id));
    
    if (foundMovie) {
      setMovieData({
        title: foundMovie.title,
        original_title: foundMovie.original_title,
        release_date: foundMovie.release_date,
        vote_average: foundMovie.vote_average,
        popularity: foundMovie.popularity,
        overview: foundMovie.overview
      });
    }
  }, [id]);

  // Determine the youtube key from local file, fallback to default trailer if none exists
  const trailerKey = trailerLinks[id] || ' ';

  return (
    <div className='player'>

      <img
        src={back_arrow_icon}
        alt="Go back"
        onClick={() => navigate(-1)}
      />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${trailerKey}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="play-info">
        <h3>Movie Name :  {movieData.title}</h3>
          <br></br>

        <p1>Rating: {movieData.vote_average}</p1>
          <br></br>

        <p2>Popularity: {movieData.popularity}</p2>
          <br></br>

        <p3>
          Overview : {movieData.overview}
        </p3>
          <br></br>

        <p4>Release Date : {movieData.release_date}</p4>

      </div>
 
    </div>
  )
}

export default Player