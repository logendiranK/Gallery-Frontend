import React from 'react';
import {  BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ArtworkGallery from './artwork';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import './App.css';
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<ArtworkGallery />} />
        <Route path="/about" element={<About/>} />
      </Routes>
       <Footer/>
    </Router>
  );
}

export default App;
