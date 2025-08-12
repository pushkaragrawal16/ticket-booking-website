"use client"
import React from 'react';

import '../componestsstyle/Left.css'
import Filter from './Filter';

const Left = () => {

  
  return (
      <div style={{borderRadius:"20px",minWidth:"30vw"}}>
        <div className='flex-filter'><span className='font-xxl' >Filter </span>
    <span className="material-symbols-outlined">
arrow_drop_up
</span>

</div>
    <Filter/>
    
    </div>
  )
}

export default Left