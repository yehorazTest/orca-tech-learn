
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearch } from '../../context/SearchContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const { search } = useSearch();

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      search(searchQuery);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">OT</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              ORCATech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${isActive('/') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              Learning Paths
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              About
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search learning resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
            </div>
          </form>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/"
                className={`transition-colors ${isActive('/') ? 'text-blue-400' : 'text-slate-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Learning Paths
              </Link>
              <Link 
                to="/about"
                className={`transition-colors ${isActive('/about') ? 'text-blue-400' : 'text-slate-300'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
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
      </div>
    </header>
  );
};

export default Header;
