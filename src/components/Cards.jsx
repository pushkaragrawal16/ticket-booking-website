import React from 'react';
import './Right.css';
import './cards.css';
import movies from './movies.js';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div>
      <div
        className="card-flex"
        style={{
          flexWrap: 'wrap',
          display: 'flex',
          gap: '20px',
          justifyContent:'space-around',

          padding: '20px',
        }}
      >
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            <div className="card">
              <img
                src={movie.poster}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '10px' }}
              />
              <h3 className="Title">{movie.title}</h3>
              <h5 className='rating'>{movie.rating}</h5>
              <h5 className='lang'>{movie.languages.join(', ')}</h5>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
