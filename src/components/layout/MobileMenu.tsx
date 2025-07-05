
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearch } from '../../context/SearchContext';

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { search } = useSearch();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      search(searchQuery);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
      </Button>

      {isMenuOpen && (
        <div className="md:hidden py-4 border-t border-slate-800">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/"
              className={`transition-colors ${isActive('/') ? 'text-blue-400' : 'text-slate-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/learning-paths"
              className={`transition-colors ${isActive('/learning-paths') ? 'text-blue-400' : 'text-slate-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Learning Paths
            </Link>
            <Link 
              to="/courses"
              className={`transition-colors ${isActive('/courses') ? 'text-blue-400' : 'text-slate-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/about"
              className={`transition-colors ${isActive('/about') ? 'text-blue-400' : 'text-slate-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`transition-colors ${isActive('/contact') ? 'text-blue-400' : 'text-slate-300'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <form onSubmit={handleSearch} className="flex items-center pt-2">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
              </div>
            </form>
          </nav>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
