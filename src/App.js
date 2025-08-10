import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home.jsx';
import Upcoming from './page/Upcoming.jsx';
import MovieDetail from './page/MovieDetail.jsx';
import Seatmatrix from './page/Seatmatrix.jsx';
import Popular from './page/Popular.jsx';
import Movies from './page/Movies.jsx';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Upcoming" element={<Upcoming />} />
        <Route path='/movie/:id' element={<MovieDetail/>} />
   
        <Route path='/booking/:id' element={<Seatmatrix/>} />
        <Route path='/Popular' element={<Popular/>} />
        <Route path='/Movies' element={<Movies/>} />
      </Routes>
    </Router>
  );
}

export default App;
