import React, { useState, useEffect } from 'react';
import {useNavigate,Link } from 'react-router-dom'; 
import './Navbar.css';

const Navbar = () => {
  const [signIn, setSignIn] = useState(false);
 
  const [load, setLoad] = useState(false);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/profile', {
          credentials: 'include',
        });
        const data = await response.json();
        setSignIn(data.success);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchData();
  }, []);

  const handleOption = async (e) => {
    const url = e.target.value;
    setLoad(true);
    navigate(url); 
    setTimeout(() => setLoad(false), 800); 
  };

  const handleSignIn = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <div className='navbar-bg border-radius m-x m-y flex justify-around navbar'>
      {!signIn && (
        <button className='signIn' onClick={handleSignIn}>
          Sign in
        </button>
      )}
      {signIn && (
        <div>
          <span className="material-symbols-outlined" style={{ fontSize: "50px", color: "black" }}>
            person
          </span>
        </div>
      )}
      <ul className='flex align-center'>
        <li>
          <select defaultValue='' onChange={handleOption} disabled={load}>
            <option value="" hidden> Movies</option>
            <option value="/Movies">All</option>
            <option value="/Popular">Popular</option>
            <option value="/Upcoming">Upcoming</option>
          </select>
        </li>

        <li><Link to="/Stream">Stream</Link></li>
        <li><Link to="/Shows">Shows</Link></li>
        <li><Link to="/Podcasts">Podcasts</Link></li>
        <li><Link to="/Standup">Standup</Link></li>
      </ul>

      <ul>
        <li>
          <form action="/search" className='flex-search'>
            <div className='flex-search my-search'>
              <span className="material-symbols-outlined">search</span>
              <input type="search" name="q" placeholder="Search movies..." className='h-30 p-x w-100 Inputsearch' />
              <button type="submit" className='search'>Search</button>
            </div>
          </form>
        </li>
      </ul>

      {load && (
        <div className='Loading'>
          <img src="./Loading.gif" alt="Loading" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
