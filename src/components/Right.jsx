"use client"
import React from 'react'
import Righttop from './Righttop'

import "./Right.css"
import Cards from './Cards'
 const handlebook = async (data) => {
  await fetch("http://localhost:5000/book/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  console.log(data)
};
const Right = () => {
  return (
    <div>
    <div className='m-10'>
    <Righttop/>

   
    </div>
    

 </div>
  )
}

export default Right