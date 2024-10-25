import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Intro from './components/Intro';
import DSA from './pages/dsa'; 
import OOP from './pages/oop'; 
import BCN from './pages/bcn'; 
import Review from './pages/review'; // Import the Review component
import Footer from './components/Footer';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />

      {/* Show Intro and Card only on the homepage */}
      {location.pathname === '/' && <Intro />} 
      {location.pathname === '/' && <Card />}
      
      <Routes>
        {/* Define your routes for the main content */}
        <Route path='/dsa' element={<DSA />} /> 
        <Route path='/oop' element={<OOP />} /> 
        <Route path='/bcn' element={<BCN />} />
        <Route path='/review' element={<Review />} /> {/* New route for reviewing answers */}
      </Routes>

      {/* Show Footer only on the homepage */}
      {location.pathname === '/' && <Footer />}
    </>
  );
};

export default App; 
