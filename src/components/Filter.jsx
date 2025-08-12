
import React,{useState} from 'react'

import '../componestsstyle/Filter.css'
const languages=[
    "Hindi","English","Tamil","Telugu"
]
const genres = [
  "Drama", "Action", "Crime", "Romantic", "Sci-Fi", "Sports",
  "Adventure", "Comedy", "Fantasy", "Period", "Thriller"
];const formats = [
  "2D", "3D", "4DX 3D", "MX4D 3D", "3D SCREEN X",
  "IMAX 2D", "IMAX 3D", "DOLBY CINEMA 2D",
  "DOLBY CINEMA 3D", "ICE 3D"
];
const Filter = () => {
    const [flipped, setflipped] = useState(true)
    
      const handleclick=() => {
       setflipped(!flipped)
      }
      
     const [genflipped, setgenflipped] = useState(true)
    
      const handleclickgen=() => {
       setgenflipped(!genflipped)
      }
      
     const [formatflipped, setformatflipped] = useState(false)
    
      const handleclickformat=() => {
       setformatflipped(!formatflipped)
      }
  return (
    <div className='flex-gap ' id={'Filter'}>
<div className='flex-head'><h3>Language </h3><span className="material-symbols-outlined " style={{cursor:"pointer",transform:flipped?"scaleY(-1)":"scaleY(1)"}} onClick={handleclick}>
arrow_drop_up
</span></div>
<div className={`lang flex-lang ${flipped ? "show" : "hide"}`} style={{marginLeft:"10px"}}>
      {
        languages.map((language,index)=>(
<button key={index}>{language}</button>
        ))
      }
    </div>
<div className='m flex-head'><h3>Genres </h3><span className="material-symbols-outlined " style={{cursor:"pointer",transform:genflipped?"scaleY(-1)":"scaleY(1)"}} onClick={handleclickgen}>
arrow_drop_up
</span></div>
<div className={`lang flex-lang ${genflipped ? "show" : "hide"}`} style={{marginLeft:"10px"}}>
      {
        genres.map((genre,index)=>(
<button key={index}>{genre}</button>
        ))
      }
    </div><div className='m flex-head'><h3>Formats</h3><span className="material-symbols-outlined " style={{cursor:"pointer",transform:formatflipped?"scaleY(-1)":"scaleY(1)"}} onClick={handleclickformat}>
arrow_drop_up
</span></div>
<div className={` ${formatflipped ? "show" : "hide"}`} style={{marginLeft:"10px"}}>
      {
        formats.map((format,index)=>(
<button key={index}>{format}</button>
        ))
      }
    </div>

    </div>
  )
}

export default Filter
