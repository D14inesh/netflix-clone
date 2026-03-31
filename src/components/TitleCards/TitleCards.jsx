import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import { useNavigate } from 'react-router-dom'
import now_playing_data from '../../../backend/nowPlaying.js'
import popular_data from '../../../backend/popular.js'
import top_rated_data from '../../../backend/topRated.js'
import upcoming_data from '../../../backend/upcoming.js'

const dataMap = {
  now_playing: now_playing_data,
  popular: popular_data,
  top_rated: top_rated_data,
  upcoming: upcoming_data,
};

const TitleCards = ({ title, catagory }) => {

  const navigate = useNavigate();
  const cardsRef = useRef();
  const cards = dataMap[catagory] || now_playing_data;

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    const ref = cardsRef.current;
    ref.addEventListener('wheel', handleWheel);
    return () => ref.removeEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Network"}</h2>
      <div className='card-list' ref={cardsRef}>
        {cards.map((card, index) => (
          <div className='card' key={index} onClick={() => navigate(`/player/${card.id}`)}>
            <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt={card.title} />
            <p>{card.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards