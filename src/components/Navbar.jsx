import React from 'react';
import { ModeToggle } from './mode-toggle';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-3 fixed top-0 left-0 w-full z-50">
      <div className="container flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img src="/src/assets/images/logo.webp" alt="Logo" className="h-8 w-8" />
          <div className="text-white text-xl font-bold">SKCT E-Learn</div>
        </div>
        <div className="space-x-7">
          <NavLink to="/" className="text-white">Home</NavLink>
          <NavLink to="/courses" className="text-white">Courses</NavLink>
          <NavLink to="/login" className="text-white">Login</NavLink>
        </div>
        <div className="absolute top-0 right-0 m-1 p-1">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
