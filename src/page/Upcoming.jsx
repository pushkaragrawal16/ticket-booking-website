import React, { useEffect, useState } from 'react';
import './Upcoming.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Upcoming = () => {
  const apiUrl = "https://api.themoviedb.org/3/movie/upcoming?api_key=4d767c7e2ec03f18789ce1aa485d301a";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(apiUrl);
        const x = await response.json();
        setData(x.results);
      } catch (err) {
        console.error("Failed to fetch movies", err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div style={{ backgroundColor: "black", color: 'white' }}>
      <Navbar />

      <div>
        <h2 style={{ color: 'white' }} className='navbar-upcoming'>Upcoming</h2>
      </div>

      <div className='Movies-container' style={{ color: 'black' }}>
        {data.map((item) => (
          <div key={item.id} className='upcoming-movies'>
            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.title} className='poster' />
            <h3 style={{ color: 'white' }}>{item.title}</h3>
            <div style={{ color: 'white' }}>
              <span>Rating:</span>
              <span style={{ color: 'gray' }}>⭐{item.vote_average}/10</span>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Upcoming;
