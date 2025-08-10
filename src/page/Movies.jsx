"use client"
import React, { useEffect, useState } from 'react'

import './Movies.css'

import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
const apiKey="4d767c7e2ec03f18789ce1aa485d301a";
const apiUrl="https://api.themoviedb.org/3/movie/popular?api_key=4d767c7e2ec03f18789ce1aa485d301a";
const apiUrl2="https://api.themoviedb.org/3/movie/top_rated?api_key=4d767c7e2ec03f18789ce1aa485d301a";
const Movies = () => {const [data, setdata] = useState([]);
   const [data2, setdata2] = useState([]) 
   useEffect(() => {
    const fetchmovies=async()=>{
        const response= await fetch(apiUrl);
        console.log(`response is ${response}`);
       const x=await response.json();
       console.log(`x is ${x}`);
       setdata(x.results);
         console.log("fetched data is ",data);
    }
    fetchmovies();
     
    
   }, []);
   useEffect(() => {
    const fetchmovies=async()=>{
        const response= await fetch(apiUrl2);
        console.log(`response is ${response}`);
       const x=await response.json();
       console.log(`x is ${x}`);
       setdata2(x.results);
         console.log("fetched data is ",data2);
    }
    fetchmovies();
     
    
   }, []);
   useEffect(() => {
     console.log("current data status :",data)
   
    
   }, [data,data2])
   
 
   
   
  return (
      
    <div style={{backgroundColor:"black",color:'white'}}>
        <div>
        <Navbar/>
        </div>
            <div>
                <h2 style={{color:'white'}} className='popular'>Popular</h2>
            </div>
          
    <div className='Movies-container'style={{color:'black'}}>
      
<div className='popular-container'>
        {data.map((item)=>{
            return(
                <div key={item.id} className='movies'>
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" className='poster' />
                    <h3 style={{color:'white'}}>{item.title}</h3>
                <div style={{color:'white'}}><span style={{color:'white'}}>Rating:</span><span style={{color:'gray'}}>⭐{item.vote_average}/10</span></div>
                
                </div>
               
               
            )
        })}
        </div>
      
           
        <div style={{width:'100vw'}}>
                <h2 style={{color:'white'}} className='popular'>Top Rated🏆</h2>
            </div>
       <div className='popular-container'>
        {data2.map((item)=>{
            return(
                <div key={item.id} className='movies'>
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt="" className='poster' />
                    <h3 style={{color:'white'}}>{item.title}</h3>
                <div style={{color:'white'}}><span style={{color:'white'}}>Rating:</span><span style={{color:'gray'}}>⭐{item.vote_average}/10</span></div>
                
                </div>
               
               
            )
        })}
        </div>

    </div>
    <Footer/>

    </div>
  )
}

export default Movies