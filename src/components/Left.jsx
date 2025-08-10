"use client"
import React, { useState } from 'react';

import '../componestsstyle/Left.css'
import Filter from './Filter';

const Left = () => {

  
  return (
      <div style={{borderRadius:"20px",minWidth:"300px"}}>
        <div className='flex-filter'><span className='font-xxl' >Filter </span>
    <span className="material-symbols-outlined">
arrow_drop_up
</span>

</div>
    <Filter/>
    <div>
   <h1>connect us</h1>
    </div>
    </div>
  )
}

export default Left