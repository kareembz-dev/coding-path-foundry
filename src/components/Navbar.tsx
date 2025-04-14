
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Code, Search } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary-600" />
            <Link to="/" className="font-heading font-bold text-xl text-gray-900">
              Coding Path Foundry
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Courses
            </Link>
            <Link to="/learning-paths" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Learning Paths
            </Link>
            <Link to="/community" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Community
            </Link>
            <Link to="/pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
            <Button variant="ghost" className="text-gray-700 hover:text-gray-900 hover:bg-gray-100">Sign In</Button>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-primary-600">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 pb-3">
            <Link to="/" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
              Home
            </Link>
            <Link to="/courses" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
              Courses
            </Link>
            <Link to="/learning-paths" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
              Learning Paths
            </Link>
            <Link to="/community" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
              Community
            </Link>
            <Link to="/pricing" className="block py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md">
              Pricing
            </Link>
            <div className="pt-2 border-t border-gray-200">
              <Button variant="ghost" className="w-full justify-start text-gray-700 hover:text-gray-900 hover:bg-gray-100">Sign In</Button>
              <Button className="w-full mt-2 bg-primary-600 hover:bg-primary-700 text-white">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
