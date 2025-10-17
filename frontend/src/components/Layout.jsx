import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-white text-black shadow-md fixed top-0 w-full z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link
                to="/"
              >
                <span className="ml-2 text-3xl font-bold">ClassCount AI</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link
                to="/"
                className="px-3 py-2 text-xl font-medium rounded-md text-black hover:text-green-500 hover:underline"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="px-3 py-2 text-xl font-medium rounded-md text-black hover:text-green-500 hover:underline"
              >
                About
              </Link>
              <Link
                to="/history"
                className="px-3 py-2 text-xl font-medium rounded-md text-black hover:text-green-500 hover:underline"
              >
                History
              </Link>
              <Link
                to="/Login"
                className="px-4 py-2 bg-green-500 text-white text-lg font-semibold rounded-md hover:bg-green-600 transition"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow container mx-auto mt-12">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-green-950 to-green-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="text-gray-300 space-y-1">
                <li>
                  Email: <a href="mailto:info@classcount.ai" className="hover:underline">info@classcount.ai</a>
                </li>
                <li>
                  Phone: <a href="tel:5551234567" className="hover:underline">(555) 123-4567</a>
                </li>
                <li>Address: 123 AI Street, Tech City</li>
              </ul>
            </div>
            {/* Follow Us Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition transform hover:scale-110"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-600 transition transform hover:scale-110"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-pink-500 transition transform hover:scale-110"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
            {/* Quick Links Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-300 space-y-1">
                <li>
                  <Link to="/" className="hover:underline hover:text-green-400">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:underline hover:text-green-400">About</Link>
                </li>
                <li>
                  <Link to="/history" className="hover:underline hover:text-green-400">History</Link>
                </li>
                <li>
                  <Link to="/login" className="hover:underline hover:text-green-400">Login</Link>
                </li>
              </ul>
            </div>
            {/* Team LinkedIn Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Team</h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <a
                    href="https://www.linkedin.com/in/bollineni-jahnavi-6b9a07301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-500 transition"
                  >
                    <FaLinkedin size={20} />
                    <span>Bollineni jahnavi
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/gayathri-chagam-6ab1a0324/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-500 transition"
                  >
                    <FaLinkedin size={20} />
                    <span>Gayathri Chagam
                    </span>
                  </a>
                </li>
                <li>
                  
                  <a
                    href="https://www.linkedin.com/in/bhuvan-samudrala-6391ab2a1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-500 transition"
                  >
                    <FaLinkedin size={20} />
                    <span>Bhuvan Samudrala</span>
                  </a>
                </li>
                <li>
                  
                  <a
                    href="https://www.linkedin.com/in/yashwanth-boorugu-86216132b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-500 transition"
                  >
                    <FaLinkedin size={20} />
                    <span>Yashwanth boorugu</span>
                  </a>
                </li>
                <li>
                  
                  <a
                    href="https://www.linkedin.com/in/umamahesh-kannakanti-9888b129b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-500 transition"
                  >
                    <FaLinkedin size={20} />
                    <span>Umamahesh kannakanti
                    </span>
                  </a>
                </li>
                <li>
                  
                  <a
                    href="https://www.linkedin.com/in/vishnu-vardhan-siluveru-068256183/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-green-500 transition"
                  >
                    <FaLinkedin size={20} />
                    <span>Vishnu Vardhan Siluveru
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} ClassCount AI. All rights reserved.</p>
            <a
              href="#top"
              className="text-green-300 hover:text-white mt-4 inline-block transition"
            >
              Back to Top
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;