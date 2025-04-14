
import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Github, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-primary-500" />
              <span className="font-heading font-bold text-xl text-white">
                Coding Path Foundry
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A comprehensive platform for learning full-stack development through structured paths, hands-on projects, and expert guidance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">Learning</h3>
            <ul className="space-y-3">
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition-colors">All Courses</Link></li>
              <li><Link to="/learning-paths" className="text-gray-400 hover:text-white transition-colors">Learning Paths</Link></li>
              <li><Link to="/tutorials" className="text-gray-400 hover:text-white transition-colors">Tutorials</Link></li>
              <li><Link to="/workshops" className="text-gray-400 hover:text-white transition-colors">Workshops</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/affiliate" className="text-gray-400 hover:text-white transition-colors">Affiliate Program</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading font-semibold text-white text-lg mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
            
            <h3 className="font-heading font-semibold text-white text-lg mt-6 mb-4">Support</h3>
            <div className="flex items-center text-gray-400">
              <Mail className="h-5 w-5 mr-2" />
              <a href="mailto:support@codingpathfoundry.com" className="hover:text-white transition-colors">
                support@codingpathfoundry.com
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Coding Path Foundry. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select className="bg-gray-800 text-gray-300 rounded py-1 px-2 text-sm border border-gray-700 focus:outline-none focus:ring-1 focus:ring-primary-500">
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="fr">Français</option>
              <option value="de">Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
