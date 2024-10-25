import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="flex justify-between items-center w-full bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 p-4 shadow-lg">
        <img className="h-12 w-12 rounded-full" src="src/assets/logo.jpeg" alt="Logo" />
        
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
