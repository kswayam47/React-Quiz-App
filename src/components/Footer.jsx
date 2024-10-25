import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="linear-gradient(135deg, #12032d, #000000); text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Quiz Developer Kswayam47</h2>
        <p className="mb-4">Your one-stop destination for interactive quizzes!</p>
        
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-300 transition duration-200" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-300 transition duration-200" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-300 transition duration-200" />
          </a>
          <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-blue-300 transition duration-200" />
          </a>
        </div>
        
        <p className="text-sm">© 2024 Quiz Developer KSwayam47. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
