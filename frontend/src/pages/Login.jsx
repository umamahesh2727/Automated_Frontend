import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        alert('Login Successful');
        navigate('/upload');
      } else if (response.status === 404) {
        const confirmSignup = window.confirm('User not found. Would you like to sign up?');
        if (confirmSignup) {
          navigate('/signup');
        }
      } else {
        alert(data.message || 'Login Failed');
      }
    } catch (err) {
      console.error('Error during login:', err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Welcome Back</h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-6">
            <label htmlFor="username" className="block text-lg font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-lg font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          {/* Submit Button */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full text-xl py-3 px-4 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition duration-200"
            >
              Login
            </button>
          </div>
          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
