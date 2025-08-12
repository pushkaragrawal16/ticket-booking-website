import React from 'react'
import '../componestsstyle/content.css'
import Cards from './Cards'
import Left from './Left'
import Right from './Right'
import Footer from './Footer'

const Content = () => {
  return (
  <div style={{backgroundImage:'url("image.png")',backgroundSize:'cover',height:'auto',width:'100vw',backgroundAttachment:"fixed"}}> 
    <div className='contentlr'>
      <div style={{width: "20vw",margin:"20px"}}><Left/></div>
      
    <div style={{width:"80vw",padding:"20px",margin:"50px"}}>
    
        <Right/>
    </div>
    </div>
    <hr style={{height:'1px', backgroundColor:' gray', border:'none',translate:'0px 45px',width:'32vw',}}>
    </hr>
   

    <span className='bookupcoming'> BOOK FOR UPCOMING SHOWS</span>
 <a href="/Upcoming"><button className='upcoming'>Coming Soon</button></a>
<div>
  <div>
<h2 style={{color:"white",margin:"10px",padding:'10px'}}>
  Trending 
</h2></div>
<div className='trending'>
  
  <img src="/saiyaara.jpg" alt="" />
<div >
  <div style={{fontSize:"45px",margin:"30px",fontWeight:"bold"}}>
  Saiyaara
</div>
<div style={{fontSize:"20px",margin:"10px",marginLeft:"30px"}}>Rating: 8.5⭐</div>
<div style={{fontSize:"20px",margin:"10px",marginLeft:"30px",fontWeight:"bold"}}>Drama|Romance</div>
<div><a href="/booking/saiyaara"><button style={{borderRadius:'5px',transform:'translate(30px,30px)',height:'5vh'}} className='Saiyaara-book' >Book Now</button></a></div>
</div>
</div>
</div>
<h2 style={{color:"white",position:'relative',zIndex:'2',margin:'20px',marginLeft:"10px",translate:'0px 30px'}}>Movies in Gwalior</h2>
    <hr style={{height:'2px', backgroundolor:' black', border:'none'}}>
    </hr>
    <Cards/>
<Footer/>

    </div>

  )
}

export default Content