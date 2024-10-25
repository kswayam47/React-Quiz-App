import React, { useEffect, useState } from 'react';

const Intro = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Welcome to ReactIQ';
  const typingDelay = 100; // Adjust typing speed (milliseconds)

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1)); // Correctly builds the string
        index++;
        setTimeout(type, typingDelay);
      }
    };
    type();
  }, []);

  return (
    <div className="h-56 flex justify-center items-center">
      <h1 className='text-4xl font-extrabold text-white transform transition duration-300 hover:scale-105 hover:shadow-2xl'>
        {displayedText}
      </h1>
    </div>
  );
}

export default Intro;
