import React, { useState } from 'react';
import { Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black bg-opacity-90 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="hover:text-gray-300 transition-colors">Shows</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Celebrities</a>
          <a href="#" className="hover:text-gray-300 transition-colors">Shop All</a>
        </nav>
        
        {/* Search bar */}
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search..." 
            className="bg-transparent border border-gray-700 rounded-full py-1 px-4 pl-10 w-64 focus:outline-none focus:border-white"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
        </div>
        
        {/* Mobile search icon */}
        <div className="md:hidden">
          <Search className="w-5 h-5" />
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 py-4 px-6">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-lg">Shows</a>
            <a href="#" className="text-lg">Celebrities</a>
            <a href="#" className="text-lg">Shop All</a>
          </nav>
          <div className="mt-4 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border border-gray-700 rounded-full py-2 px-4 pl-10 w-full focus:outline-none focus:border-white"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;