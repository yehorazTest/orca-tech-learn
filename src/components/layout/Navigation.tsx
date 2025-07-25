
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        to="/" 
        className={`transition-colors ${isActive('/') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        Home
      </Link>
      <Link 
        to="/learning-paths" 
        className={`transition-colors ${isActive('/learning-paths') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        Learning Paths
      </Link>
      <Link 
        to="/courses" 
        className={`transition-colors ${isActive('/courses') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        Courses
      </Link>
      <Link 
        to="/projects" 
        className={`transition-colors ${isActive('/projects') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        Projects
      </Link>
      <Link 
        to="/about" 
        className={`transition-colors ${isActive('/about') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        About
      </Link>
      <Link 
        to="/support" 
        className={`transition-colors ${isActive('/support') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        Support Us
      </Link>
      <Link 
        to="/contact" 
        className={`transition-colors ${isActive('/contact') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
      >
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
