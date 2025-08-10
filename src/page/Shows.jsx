"use client";
import React, { useEffect, useState } from "react";
import "./Shows.css";
import Navbar from "../components/Navbar.jsx";
import { useParams } from "react-router-dom";
import movies from "../components/movies.js";

const Shows = () => {
 const date=new Date()
  const [seldate, setseldate] = useState(String(date.getDate())); // default to today's date as string
  const [time, settime] = useState(24)
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const [availshow, setAvailShow] = useState(movie.shows.find((s) => s.date === seldate));
  
  const [prefTime, setPrefTime] = useState(availshow.times.filter(element=>1===1)); // store preferred time
 useEffect(() => {
setAvailShow(movie.shows.find((s) => s.date === seldate));
 }, [seldate])
 const handledate=(e) => {
  setseldate(String(e.target.value));
 }
 useEffect(() => {
   

   
 }, )
 
 const handleTime=(e) => {
   settime(Number(e.target.value));
   setPrefTime(availshow.times.filter((s) =>Number(s)<=Number(time)));
  
 

   
 }
 
 console.log(prefTime);

    return (
      <div className="shows-container">
      <Navbar/>
      <select name="date" defaultValue={""} onChange={handledate}>
        <option value="" disabled>select</option>
        <option value="10" >10</option>
        <option value="11" >11</option>
        <option value="12" >12</option>
        
      </select>
      <select name="time" defaultValue={""} onChange={handleTime}>
        <option value="" disabled>select</option>
        <option value="12" >Morning</option>
        <option value="16" >afternoon</option>
        <option value="20" >Evening</option>
        <option value="24">Night</option>
        
      </select>
{
  prefTime.map((time, index) => {
    return (
      <div key={index}>
        {availshow.date}
        <h3>{time}</h3>
      </div>
    );
  })
}

   
 </div>
  )
}
export default Shows;
