import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (!token) {
      // If no token exists, navigate to the login page
      navigate('/login');
    } else {
      // If token exists, navigate to the upload page
      navigate('/login');
    }
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/src/images/background_2.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white mb-4">
            Count students effortlessly
          </h1>
          <p className="text-xl text-white mb-6">
            Upload images and get results
          </p>
          <button
            onClick={handleGetStartedClick}
            className="relative overflow-hidden bg-white text-green-600 py-2 px-6 rounded-md text-lg font-bold tracking-wider uppercase border-2 border-green-400 hover:text-white hover:scale-110 hover:shadow-lg hover:border-green-600 transition duration-1000 before:content-[''] before:absolute before:left-[-50px] before:top-0 before:w-0 before:h-full before:bg-green-600 before:skew-x-12 before:z-[-1] hover:before:w-[250%]"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}