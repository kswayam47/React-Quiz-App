import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Review = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { quizData, selectedAnswers, correctAnswers } = location.state || { quizData: [], selectedAnswers: [], correctAnswers: [] };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className='flex flex-col items-center justify-center p-4  min-h-screen'> {/* Set a dark blue background */}
      <h1 className='text-3xl font-bold mb-4 text-white'>Review Your Answers</h1> {/* Change text color to white */}
      <ul className='w-full'>
        {quizData.map((question, index) => {
          const userAnswer = selectedAnswers[index];
          const correctAnswer = correctAnswers[index];
          return (
            <li key={index} className='mb-2'>
              <h2 className='font-semibold text-white'>{question.question}</h2> {/* Change question text to white */}
              <p className={`font-bold ${userAnswer === correctAnswer ? 'text-green-400' : 'text-red-400'}`}>
                Your Answer: {question.options[userAnswer]}
              </p>
              <p className='font-bold text-blue-300'>
                Correct Answer: {question.options[correctAnswer]}
              </p>
            </li>
          );
        })}
      </ul>
      <button onClick={goBack} className='border-2 border-blue-500 bg-amber-600 p-4 mt-4'>
        <h1 className='font-extrabold text-white'>Go Back</h1> {/* Change button text to white */}
      </button>
    </div>
  );
};

export default Review;
