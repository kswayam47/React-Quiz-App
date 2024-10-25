
import React from 'react';
import { Link } from 'react-router-dom'; 

const Card = () => {
  return (
    <div className=" md:flex justify-center items-center h-[60%] justify-around"> 
      
      <div className=" ml-6 w-[90%] md:w-1/4 h-full flex flex-col bg-white p-4 rounded-3xl  "> 
        <div className="h-[60%]">
          <img src="src/assets/ds.jpg" alt="Quiz Illustration" className="w-full h-full object-cover mb-4 rounded-xl" /> 
        </div>
        <div className="w-full h-[20%] justify-center items-center flex">
          <h1 className="text-lg font-bold mb-2 text-3xl">DSA Quiz</h1> 
        </div>
        <div className="w-full h-[10%] mb-4 text-center">
          <h1 className="text-xl font-bold">Duration: 60 minutes</h1>
          <h1 className="text-xl font-bold">Questions: 20</h1>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/dsa" className="bg-sky-500 text-white p-2 rounded hover:bg-sky-700">Proceed</Link> 
        </div>
      </div>

      
      <div className=" ml-6 my-6 w-[90%] md:w-1/4 h-full flex flex-col bg-white p-4 rounded-3xl"> 
        <div className="h-[60%]">
          <img src="src/assets/oop.jpeg" alt="Quiz Illustration" className="w-full h-full object-cover mb-4 rounded-xl" /> 
        </div>
        <div className="w-full h-[20%] justify-center items-center flex">
          <h1 className="text-lg font-bold mb-2 text-3xl">OOP Quiz</h1> 
        </div>
        <div className="w-full h-[10%] mb-4 text-center">
          <h1 className="text-xl font-bold">Duration: 15 minutes</h1>
          <h1 className="text-xl font-bold">Questions: 15</h1>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/oop" className="bg-sky-500 text-white p-2 rounded hover:bg-sky-700">Proceed</Link>
        </div>
      </div>

 
      <div className=" ml-6 w-[90%]   md:w-1/4 h-full flex flex-col bg-white p-4 rounded-3xl"> 
        <div className="h-[60%]">
          <img src="src/assets/bcn.jpeg" alt="Quiz Illustration" className="w-full h-full object-cover mb-4 rounded-xl" /> 
        </div>
        <div className="w-full h-[20%] justify-center items-center flex">
          <h1 className="text-lg font-bold mb-2 text-3xl">BCN Quiz</h1>
        </div>
        <div className="w-full h-[10%] mb-4 text-center">
          <h1 className="text-xl font-bold">Duration: 30 minutes</h1>
          <h1 className="text-xl font-bold">Questions: 5</h1>
        </div>
        <div className="flex justify-center items-center">
          <Link to="/bcn" className="bg-sky-500 text-white p-2 rounded hover:bg-sky-700">Proceed</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
