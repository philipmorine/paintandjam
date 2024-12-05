import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-white text-xl font-bold hover:text-gray-300 transition">
            HOME
          </Link>
          <div className="flex space-x-8">
            <Link 
              to="/paint-and-jam"
              className={`text-white hover:text-gray-300 transition ${
                location.pathname === '/paint-and-jam' ? 'border-b-2 border-white' : ''
              }`}
            >
              PAINT & JAM
            </Link>
            <Link 
              to="/about"
              className={`text-white hover:text-gray-300 transition ${
                location.pathname === '/about' ? 'border-b-2 border-white' : ''
              }`}
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}