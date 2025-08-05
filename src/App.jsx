import React from 'react';
import {  BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Artwork from './Artwork.jsx';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Admin from './Admin';
import Check from './Check';
import './Styles/App.css'; 
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artwork" element={<Artwork />} />
        <Route path="/about" element={<About/>} />
        <Route path="/afefwegwerwegwerffgw4erwfgwef" element={<Admin />} />
        <Route path="/check" element={<Check />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
