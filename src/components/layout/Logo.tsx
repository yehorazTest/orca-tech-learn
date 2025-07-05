
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 rounded-lg flex items-center justify-center">
        <img 
          src="/lovable-uploads/orcatech-logo.png" 
          alt="ORCATech Logo" 
          className="w-8 h-8 object-contain"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        ORCATech
      </span>
    </Link>
  );
};

export default Logo;
