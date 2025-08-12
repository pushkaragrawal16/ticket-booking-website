"use client";
import React, { useState, useEffect } from 'react';


const sources = [
  "https://wallpapercave.com/wp/wp8807417.jpg",
  "https://rare-gallery.com/thumbnail/77827-Star-Wars-Star-Wars-The-Rise-Of-SkywalkerStar-Wars.jpg",
  "https://c4.wallpaperflare.com/wallpaper/411/347/616/movies-hollywood-movies-wallpaper-preview.jpg"
];

const Righttop = () => {
  const [counter, setCounter] = useState(0);
  const total = sources.length;

  const getIndex = (offset) => (counter + offset + total) % total;


  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearInterval(interval);
  }, [total]);

  return (
    <div
     
      style={{
        width: "80vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        position: "relative",
        padding: "20px",
        overflow: "hidden",
        cursor:"pointer"
      }}
    >
      {/* Left Poster */}
      <img
        src={sources[getIndex(-1)]}
        alt="Left Poster"

        height={400}
        style={{ objectFit: "cover", borderRadius: "20px", filter: "brightness(0.4)",maxWidth:"70vw" }}
      />

      {/* Left Button */}
      <button
        onClick={() => setCounter((prev) => (prev - 1 + total) % total)}
        style={{
          position: "absolute",
          top: "50%",
          left: "50px",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "30px",
          cursor: "pointer"
        }}
      >
        <span className="material-symbols-outlined">arrow_back_ios_new</span>
      </button>

      {/* Center Poster with fade transition */}
      <div
        key={counter} // Force re-render to trigger animation
        style={{
          transition: "opacity 0.5s ease",
          opacity: 1,
          borderRadius: "30px"
        }}
      >
        <img
          src={sources[getIndex(0)]}
          alt="Main Poster"
         
          height={500}
         
          style={{
            objectFit: "cover",
            borderRadius: "30px",
            maxWidth: "70vw",
          }}
        />
      </div>

     
      <button
        onClick={() => setCounter((prev) => (prev + 1) % total)}
        style={{
          position: "absolute",
          top: "50%",
          right: "50px",
          transform: "translateY(-50%)",
          zIndex: 10,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: "30px",
          cursor: "pointer"
        }}
      >
        <span className="material-symbols-outlined">arrow_forward_ios</span>
      </button>

      
      <img
        src={sources[getIndex(1)]}
        alt="Right Poster"
       
        height={400}
        style={{ objectFit: "cover", borderRadius: "20px", filter: "brightness(0.4)",maxWidth:"70vw" }}
      />
    </div>
  );
};

export default Righttop;
