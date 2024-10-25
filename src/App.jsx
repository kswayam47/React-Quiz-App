import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Card from './components/Card';
import Intro from './components/Intro';
import DSA from './pages/dsa';
import OOP from './pages/oop'; 
import BCN from './pages/bcn'; 
const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
 
      {location.pathname === '/' && <Intro />} 
      {location.pathname === '/' && <Card />}
      
  
      <Routes>
        <Route path='/dsa' element={<DSA />} /> 
        <Route path='/oop' element={<OOP />} /> 
        <Route path='/bcn' element={<BCN />} />
      </Routes>
      
    </>
  );
};

export default App;
