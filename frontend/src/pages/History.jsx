import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import axios from 'axios';
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa';

export default function History() {
  const [predictions, setPredictions] = useState([]);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/predictions');
        setPredictions(response.data);
      } catch (error) {
        console.error('Error fetching predictions:', error);
      }
    };

    fetchPredictions();
  }, []);

  const handleDeletePrediction = async (predictionId) => {
    try {
      const response = await axios.delete(`http://localhost:5001/api/predictions/${predictionId}`);
      if (response.status === 200) {
        setPredictions((prevPredictions) =>
          prevPredictions.filter((prediction) => prediction.id !== predictionId)
        );
      }
    } catch (error) {
      console.error('Error deleting prediction:', error);
    }
  };

  return (
    <div className="w-full mx-auto p-10">
      <h1 className="text-4xl font-bold text-center text-gray-900 my-8">Prediction History</h1>
      {predictions.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-gray-600">No predictions found. Try uploading an image!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {predictions.map((prediction, index) => (
            <div
              key={prediction.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-800">Prediction #{index + 1}</h3>
                <div className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-sm font-semibold text-green-600">Completed</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-medium">Date:</span> {format(new Date(prediction.timestamp), 'PPpp')}
              </p>
              <p className="text-gray-600 text-sm mt-2">
                <span className="font-medium">Student Count:</span> {prediction.count} students
              </p>

              {/* Delete Button */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={() => handleDeletePrediction(prediction.id)}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium border-black border-2 text-black rounded-md hover:text-red-600 hover:border-red-600 transition"
                >
                  <FaTrashAlt className="mr-2" />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}