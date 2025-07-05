
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useSearch } from '../../context/SearchContext';
import { courses } from '../../data/courses';
import { learningPaths } from '../../data/learningPaths';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const location = useLocation();
  const { search } = useSearch();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      
      // Search through courses
      const courseResults = courses.filter(course =>
        course.title.toLowerCase().includes(query) ||
        course.description.toLowerCase().includes(query) ||
        course.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        course.resources?.some(resource => 
          resource.title.toLowerCase().includes(query) ||
          resource.description.toLowerCase().includes(query)
        )
      ).map(course => ({ ...course, type: 'course' }));

      // Search through learning paths
      const pathResults = learningPaths.filter(path =>
        path.title.toLowerCase().includes(query) ||
        path.description.toLowerCase().includes(query) ||
        path.tags.some(tag => tag.toLowerCase().includes(query))
      ).map(path => ({ ...path, type: 'path' }));

      // Search through lab resources
      const labResults: any[] = [];
      courses.forEach(course => {
        course.resources?.forEach(resource => {
          if (resource.title.toLowerCase().includes(query) ||
              resource.description.toLowerCase().includes(query)) {
            labResults.push({
              ...resource,
              type: 'lab',
              courseName: course.title,
              courseId: course.id
            });
          }
        });
      });

      setSearchResults([...courseResults, ...pathResults, ...labResults]);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      search(searchQuery);
      setShowResults(false);
    }
  };

  const handleResultClick = () => {
    setShowResults(false);
    setSearchQuery('');
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
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

          {/* Desktop Navigation */}
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
              to="/about" 
              className={`transition-colors ${isActive('/about') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${isActive('/contact') ? 'text-blue-400' : 'text-slate-300 hover:text-white'}`}
            >
              Contact
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search learning resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery && setShowResults(true)}
                onBlur={() => setTimeout(() => setShowResults(false), 200)}
                className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
              />
              
              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-lg max-h-80 overflow-y-auto z-50 w-96">
                  {searchResults.slice(0, 10).map((result, index) => (
                    <Link
                      key={`${result.type}-${result.id || index}`}
                      to={result.type === 'course' ? `/course/${result.id}` : 
                           result.type === 'path' ? `/learning-path/${result.id}` :
                           `/course/${result.courseId}`}
                      onClick={handleResultClick}
                      className="block px-4 py-3 hover:bg-slate-700 border-b border-slate-700 last:border-b-0"
                    >
                      <div className="flex items-start gap-3">
                        <div className={`text-2xl ${result.iconColor || 'text-blue-400'} flex-shrink-0`}>
                          {result.icon || '📚'}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium">
                            {result.title}
                          </div>
                          <div className="text-slate-400 text-sm">
                            {result.type === 'lab' ? `Lab in ${result.courseName}` : 
                             result.type === 'course' ? 'Course' : 'Learning Path'}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
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
      </div>
    </header>
  );
};

export default Header;
