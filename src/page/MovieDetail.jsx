"use client"
import React from 'react'
import './moviedetail.css';
import movies from '../components/movies.js'
import { useParams } from 'react-router-dom';

import Navbar from '../components/Navbar.jsx';
const  MovieDetailpage =({params}) => {const {id}=useParams();
  const movie =  movies.find((m) => m.id === id);
  
  return (
    <div>
    <Navbar/>
      
    <div className="movie-page flex" style={{ background: `linear-gradient(to right,black,black, transparent), 
            url("https://img.freepik.com/free-photo/cinema-with-popcorn-box_23-2148133612.jpg")`, backgroundSize:'contain',backgroundPositionX:'right',height:"100vh"
 }} >
      <img className='image' src={movie.poster} alt=""/>
      <div>
<h1 className='title' >{movie.title}</h1>
<div style={{display:"flex",gap:"10px",margin:"20px"}}>
  <span className="material-symbols-outlined" style={{color:"gold"}}>
star
</span>
<h3 className='imdb'>Imdb Rating:{movie.imdbRating}/10</h3></div>
    <h4 className='rating' style={{margin:"20px"}}>{movie.rating}</h4>
    <a href={`/booking/${movie.id}`} >
    
      <button className='book-tickets' >Book Ticket</button>
    </a>
         </div>
        
    </div>
    <div className='Flim-desc' id='desc'>
    <div style={{margin:'20px', width:"70%"}}>
      <h2>
        About the Film
      </h2>
      <p>{movie.description}</p>
    </div>
    <div>
      <h1 style={{margin:"20px"}}>Cast Members</h1>
       {movie.cast}
    </div>
   </div>
    </div>
  )
}

export default MovieDetailpage