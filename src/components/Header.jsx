import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full p-4 shadow-lg" 
           style={{
             background: 'linear-gradient(to right, #2C7744, #5A3F37)',
           }}>
        <div className="flex items-center space-x-2">
          <img className="h-12 w-12 rounded-full" src="src/assets/logo.jpeg" alt="Logo" />
          <span className="text-white text-2xl font-bold">ReactIQ</span>
        </div>
        
        <div className="flex space-x-8 text-white text-lg font-semibold">
          <a href="/" className="hover:text-amber-400 transition duration-300 ease-in-out">Home</a>
          <a href="#about" className="hover:text-amber-400 transition duration-300 ease-in-out">About Us</a>
          <a href="/" className="hover:text-red-400 transition duration-300 ease-in-out">Exit</a>
        </div>
      </nav>
    </>
  );
};

export default Header;
