import React from 'react';

const QuestionCard = ({ question, selectedOpt, setSelectedOpt }) => {
  return (
    <div className='p-3 my-4 border-2 border-blue-500 relative w-full sm:w-[90%]  bg-white flex flex-col justify-center items-center rounded-3xl'>
      <h2 className='font-bold text-3xl my-6 text-center'>{question.question}</h2>
      <ul className='w-full flex flex-col justify-center items-center'>
        {question.options.map((option, idx) => (
          <li 
            key={idx} 
            className='w-full my-2 flex justify-center items-center'
          >
            <input
              type='radio'
              id={`option-${idx}`}
              name='option'
              value={idx}
              checked={selectedOpt === idx}
              onChange={() => setSelectedOpt(idx)}
              className='appearance-none w-6 h-6 rounded-full border-2 border-gray-400 checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition-all duration-300 mr-4'
            />
            <label
              htmlFor={`option-${idx}`}
              className='cursor-pointer text-2xl'
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
