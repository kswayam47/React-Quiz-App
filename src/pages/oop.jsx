import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuestionCard from '../components/questioncard';

const OOP = () => {
  const [quizData, setQuizData] = useState(null);
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [noAnswer, setNoAnswer] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState(null);
  const [started, setStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(900);
  const [loading, setLoading] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false); 

  const loadQuiz = async () => {
    try {
      setLoading(true);
      const res = await axios.get('/API/oops.json');
      setQuizData(res.data.data);
      setStarted(true);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error('Failed to load quiz data', err);
    }
  };

  useEffect(() => {
    if (started && timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearInterval(timer);
    }
    if (timeLeft === 0) {
      submitQuiz();
    }
  }, [timeLeft, started]);

  const submitAnswer = () => {
    if (!quizData || quizData.length === 0) return;
  
    if (selectedOpt === null) {
      setNoAnswer(noAnswer + 1);
    } else if (selectedOpt === (quizData[qIndex]?.correctAnswer - 1)) { 
      setScore(score + 1);
    } else {
      setWrong(wrong + 1);
    }
    setSelectedOpt(null);
  
    if (qIndex < quizData.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      submitQuiz(); 
    }
  };
  

  const submitQuiz = () => {
    setStarted(false);
    setQuizFinished(true); 
  };

  if (!started) {
    return (
      <div className='flex justify-center items-center h-screen'>
        {!quizFinished ? (
          <div className='w-[90%] md:w-[50%] h-[15%] flex flex-col relative'>
            <h1 className='text-3xl font-extrabold text-center'>
              Are you Ready to Test Your OOP Knowledge?
            </h1>
            <div className='flex justify-center mt-4'>
              <button
                className='border-2 border-blue-500 bg-amber-600 p-4'
                onClick={loadQuiz}
              >
                <h1 className='font-extrabold'>LET'S BEGIN</h1>
              </button>
            </div>
          </div>
        ) : (
          <div className='flex justify-center items-center flex-col w-[90%] md:w-[50%]'>
            <h2 className='text-4xl font-bold text-gray-800 mb-4'>Quiz Finished!</h2>
            <div className='w-full p-6 border-4 border-indigo-500 rounded-lg bg-gray-100 shadow-lg'>
              <h3 className='text-3xl font-extrabold mb-4 text-blue-600'>Your Results</h3>
              <div className='mb-2'>
                <p className='text-xl font-bold'>Correct Answers: <span className='text-green-600'>{score}</span></p>
              </div>
              <div className='mb-2'>
                <p className='text-xl font-bold'>Incorrect Answers: <span className='text-red-600'>{wrong}</span></p>
              </div>
              <div className='mb-2'>
                <p className='text-xl font-bold'>Not Answered: <span className='text-yellow-600'>{noAnswer}</span></p>
              </div>
              <div className='mt-4'>
                <h4 className='text-2xl font-bold'>Total Score: <span className='text-indigo-600'>{score} / {quizData.length}</span></h4>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <h1>Just Wait for a minute while we fetch questions</h1>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!quizData || quizData.length === 0) {
    return <div className='flex justify-center items-center h-screen'>No quiz data available.</div>;
  }

  return (
    <div className='p-4 border-2 border-blue-500 h-full'>
      <div className='text-right text-2xl mb-4'>
        Time Left: {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
      </div>
      <div className='flex justify-center'>
        <QuestionCard
          question={quizData[qIndex]} 
          selectedOpt={selectedOpt}
          setSelectedOpt={setSelectedOpt}
        />
      </div>
      <div className='flex justify-center mt-4'>
        <button 
          onClick={submitAnswer} 
          className='border-red-200 border-2 bg-cyan-600 p-5 rounded-md text-xl'
        >
          <h1 className='font-extrabold text-white'>Submit</h1>
        </button>
      </div>
    </div>
  );
};

export default OOP;