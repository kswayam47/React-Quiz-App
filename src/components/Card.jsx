import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-[60%] md:gap-8 gap-y-6 p-6"> 

      {[
        { id: "dsa", title: "DSA Quiz", duration: "60 minutes", questions: 20, image: "src/assets/ds.jpg" },
        { id: "oop", title: "OOP Quiz", duration: "15 minutes", questions: 15, image: "src/assets/oop.jpeg" },
        { id: "bcn", title: "BCN Quiz", duration: "30 minutes", questions: 5, image: "src/assets/bcn.jpeg" },
      ].map((quiz, index) => (
        <div
          key={index}
          className="w-full md:w-1/2 h-[500px] flex flex-col bg-white bg-opacity-30 p-6 rounded-3xl shadow-lg transition duration-500 hover:scale-105 backdrop-blur-md border border-gray-300"
        >
          
          <div className="h-[60%] rounded-2xl overflow-hidden">
            <img src={quiz.image} alt={`${quiz.title} Illustration`} className="w-full h-full object-cover transition duration-500 hover:opacity-90" /> 
          </div>

          <div className="w-full h-[20%] flex justify-center items-center mt-4">
            <h1 className="text-4xl font-bold text-white tracking-wide">{quiz.title}</h1> {/* Text color changed to white */}
          </div>

          <div className="w-full h-[15%] text-center mt-2 space-y-1 mb-4">
            <h2 className="text-lg font-semibold text-white">Duration: {quiz.duration}</h2> {/* Text color changed to white */}
            <h2 className="text-lg font-semibold text-white">Questions: {quiz.questions}</h2> {/* Text color changed to white */}
          </div>

          <div className="flex justify-center items-center">
            <Link
              to={`/${quiz.id}`}
              className="bg-sky-500 text-white font-semibold px-5 py-3 rounded-full hover:bg-sky-600 transition duration-300 shadow-md hover:shadow-lg"
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
