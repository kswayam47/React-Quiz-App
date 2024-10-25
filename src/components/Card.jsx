import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="md:flex justify-center items-center h-[60%] gap-8 p-6"> 

      {[
        { id: "dsa", title: "DSA Quiz", duration: "60 minutes", questions: 20, image: "src/assets/ds.jpg" },
        { id: "oop", title: "OOP Quiz", duration: "15 minutes", questions: 15, image: "src/assets/oop.jpeg" },
        { id: "bcn", title: "BCN Quiz", duration: "30 minutes", questions: 5, image: "src/assets/bcn.jpeg" },
      ].map((quiz, index) => (
        <div
          key={index}
          className="w-full md:w-1/4 h-[500px] transform transition duration-500 hover:scale-105 flex flex-col bg-gradient-to-br from-white via-gray-50 to-gray-200 p-6 rounded-3xl shadow-lg hover:shadow-indigo-500/50 hover:ring-4 hover:ring-indigo-200/50" // Added ring glow effect
        >
          
          <div className="h-[60%] rounded-2xl overflow-hidden">
            <img src={quiz.image} alt={`${quiz.title} Illustration`} className="w-full h-full object-cover transition duration-500 hover:opacity-90" /> 
          </div>

          <div className="w-full h-[20%] flex justify-center items-center mt-4">
            <h1 className="text-3xl font-bold text-gray-800 tracking-wide">{quiz.title}</h1> 
          </div>

          <div className="w-full h-[10%] text-center mt-2 space-y-1">
            <h2 className="text-lg font-semibold text-gray-600">Duration: {quiz.duration}</h2>
            <h2 className="text-lg font-semibold text-gray-600">Questions: {quiz.questions}</h2>
          </div>

          <div className="flex justify-center items-center mt-4">
            <Link
              to={`/${quiz.id}`}
              className="bg-sky-500 text-white font-semibold px-5 py-3 rounded-full hover:bg-sky-600 transition duration-300 shadow-md hover:shadow-lg hover:shadow-sky-300 glow-effect" // Added glow effect on hover
            >
              Proceed
            </Link>
          </div>

        </div>
      ))}

    </div>
  );
};

export default Card;
