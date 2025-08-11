"use client";
import React, { useState, useEffect } from 'react';
import './Seatmatrix.css';
import {useParams} from "react-router-dom";

const SeatMatrix = () => {


  
  const {id} = useParams();  // Access the dynamic route param
 

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [SignIn, setSignIn] = useState(false);
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);

 
  useEffect(() => {
    const fetchBookedSeats = async () => {
 
        const response = await fetch(`http://localhost:5000/book/booked-seats?movie=${id}`);
        const data = await response.json();
        setBookedSeats(data.bookedseats);
      
    };
    fetchBookedSeats();
  }, [id]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/profile', {
          credentials: 'include',
        });

        const data = await response.json();

        if (data.success && data.user) {
          setSignIn(true);

          // Logging structure to confirm
          console.log("User profile:", data.user);

          setname(data.user.displayName);
          setemail(data.user.email);
        } else {
          setSignIn(false);
        }
      } catch (err) {
        console.error("Error fetching user profile:", err);
      }
    };

    fetchData();
  }, []);

  const handleSignIn = () => {
    const currentpath=window.location.pathname;
    window.location.href = `http://localhost:5000/auth/google?redirect=${encodeURIComponent(currentpath)}`;
  };

  const handleSeatClick = (index) => {
    if (bookedSeats.includes(index)) return;

    if (selectedSeats.includes(index)) {
      setSelectedSeats(selectedSeats.filter(seat => seat !== index));
    } else {
      setSelectedSeats([...selectedSeats, index]);
    }
  };



  const handlebookedseats = async () => {
   
      await fetch(`http://localhost:5000/book/booked-seats/add`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayname: name,
          email: email,
          bookedseats: selectedSeats,
          movieId:id,
        }),
      });
    
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 0; i < 12 * 15; i++) {
      const isBooked = bookedSeats.includes(i);
      const isSelected = selectedSeats.includes(i);
      if(i===0){
        seats.push(
          <div key={'reckliner'} className='Reckliner'>Reckliner</div>
        )
      }
      if (i >= 0 && i < 12 ) {
seats.push(
        <div
          key={i}
          className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''} reckliner`}
          onClick={() => handleSeatClick(i)}
        >
          {i + 1}
        </div>
      );
      }

   if(i===12){seats.push(
<div className='Royal' key={'royal'}>Royale</div>
  )
 }
      if (i >= 12 && i < 48 ) {
seats.push(
        <div
          key={i}
          className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''} royale`}
          onClick={() => handleSeatClick(i)}
        >
          {i + 1}
        </div>
      );
      }
      if(i===48){
        seats.push(
          <div key={'club'} className='Club'>Club</div>
        )
      }
      if (i >= 48 && i < 96 ) {
seats.push(
        <div
          key={i}
          className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''} club`}
          onClick={() => handleSeatClick(i)}
        >
          {i + 1}
        </div>
      );
      }
       if(i===96){
        seats.push(
          <div key={'executive'} className='Executive'>Executive</div>
        )
      }
      if (i >= 96 && i < 144 ) {
seats.push(
        <div
          key={i}
          className={`seat ${isBooked ? 'booked' : ''} ${isSelected ? 'selected' : ''} executive`}
          onClick={() => handleSeatClick(i)}
        >
          {i + 1}
        </div>
      );
      }

     
     
    
      

    }
    return seats;
  };

  const handleBooking = async () => {
    if (selectedSeats.length === 0) return alert("No seats selected");

    
    await handlebookedseats();

    
    setBookedSeats([...bookedSeats, ...selectedSeats]);
    setSelectedSeats([]);
  };

  return (
    <div className="seat-wrapper">
      <h2 style={{ color: 'red' }}>Select Your Seats</h2>
      <div className="seat-grid">{renderSeats()}</div>
      <p> Selected Seats: {selectedSeats.length > 0 ? selectedSeats.map(s => s + 1).join(', ') : 'None'} </p>
      {SignIn ? (
        <button className='Book' onClick={handleBooking}>  Book</button> ) : 
        (<button className='Signin' onClick={handleSignIn} > Sign in to book </button>)
        }
    </div>
  );
};

export default SeatMatrix;
