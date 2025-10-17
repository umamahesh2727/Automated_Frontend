import React from 'react';
import { useNavigate } from 'react-router-dom';



const About = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full mx-auto">
      <div className="text-center mb-12 mt-12">
        <h1 className="text-4xl font-bold text-gray-900 my-6">
          About 
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-16 p-8 mx-8 md:p-16 bg-white rounded-lg">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-green-500 text-sm font-bold uppercase mb-2">Smart Classroom Counting</h3>
        <h1 className="text-black text-3xl font-semibold mb-6">Revolutionizing student attendance</h1>
        <p className="text-gray-700 text-lg mb-6">
          ClassCount AI is an innovative MERN-stack web application developed in Hyderabad, IN. It empowers educators to effortlessly upload classroom images and accurately estimate student counts using advanced CNN models. Users can track their uploads and predictions, gaining insights through detailed history logs that include images, counts, and timestamps. Embrace the future of attendance management with ClassCount AI and streamline your classroom operations like never before!
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 px-4">
        <img src="/src/images/background6.jpg" alt="Classroom" className="rounded-lg shadow-lg w-full h-auto" style={{ maxHeight: '500px', objectFit: 'cover' }} />
      </div>
    </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mx-8 mb-8">
        <h2 className="text-3xl font-semibold my-4 pl-20">How It Works</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-12">
          {/* First Card */}
          <div
            onClick={() => navigate('/upload')}
            className="cursor-pointer bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src="/src/images/background5.png" alt="Image upload" className="mx-auto mb-4 w-full h-40 object-cover rounded-md" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Image upload</h2>
            <p className="text-gray-600">Easily upload classroom images for processing.</p>
          </div>

      {/* Second Card */}
          <div
            onClick={() => navigate('/upload')}
            className="cursor-pointer bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src="/src/images/background4.png" alt="Student count estimation" className="mx-auto mb-4 w-full h-40 object-cover rounded-md" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Student count estimation</h2>
            <p className="text-gray-600">Accurately estimate student counts from images.</p>
          </div>

      {/* Third Card */}
          <div
            onClick={() => navigate('/history')}
            className="cursor-pointer bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img src="/src/images/background.jpg" alt="Upload history" className="mx-auto mb-4 w-full h-40 object-cover rounded-md" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Upload history</h2>
            <p className="text-gray-600">Access a complete history of your uploads and predictions.</p>
          </div>
        
      </div>
    </div>
    </div>
  );
};

export default About;
