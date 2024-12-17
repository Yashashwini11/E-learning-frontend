import { Facebook, Github, Instagram, LinkedinIcon, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="overflow-y-auto bottom-0 left-0 w-full h-16 flex flex-col md:flex-row justify-between items-center bg-blue-600 px-4 md:px-24 py-4">
      <div className="text-white font-bold text-lg mb-2 md:mb-0">© skctelearn.com 2024</div>
      <div className="flex flex-col md:flex-row items-center gap-8 text-white font-bold">
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
      </div>
      <div className="flex gap-4 mt-2 md:mt-0">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md flex justify-center items-center">
          <Facebook className="h-6 w-6" color="white" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md flex justify-center items-center">
          <Twitter className="h-6 w-6" color="white" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md flex justify-center items-center">
          <Instagram className="h-6 w-6" color="white" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-md flex justify-center items-center">
          <LinkedinIcon className="h-6 w-6" color="white" />
        </a>
      
      </div>
    </div>
  );
};

export default Footer;
