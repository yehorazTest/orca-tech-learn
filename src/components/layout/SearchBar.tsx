import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, BookOpen, Target, X } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);
  const { search, searchResults, isLoading } = useSearch();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setIsMobileExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when mobile search is expanded
  useEffect(() => {
    if (isMobileExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isMobileExpanded]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    search(newQuery);
    setIsOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      search(query);
      setIsOpen(true);
    }
  };

  const handleResultClick = (url: string) => {
    // Close all search states
    setIsOpen(false);
    setQuery('');
    setIsMobileExpanded(false);
    // Navigate programmatically to ensure it works
    navigate(url);
  };

  const handleMobileSearchClick = () => {
    setIsMobileExpanded(true);
  };

  const handleMobileClose = () => {
    setIsMobileExpanded(false);
    setQuery('');
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Search Bar */}
      <div className="hidden md:block relative w-full max-w-md" ref={searchRef}>
        <form onSubmit={handleSearch}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search courses and paths..."
              value={query}
              onChange={handleInputChange}
              onFocus={() => query && setIsOpen(true)}
              className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
          </div>
        </form>

        {isOpen && (query.trim() !== '') && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto min-w-96">
            {isLoading ? (
              <div className="px-4 py-3 text-slate-400 text-center">
                Searching...
              </div>
            ) : searchResults.length > 0 ? (
              searchResults.map((result) => (
                <Link
                  key={result.id}
                  to={result.url}
                  className="block px-4 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
                  onClick={handleResultClick}
                >
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {result.type === 'path' ? (
                        <BookOpen className="w-4 h-4 text-blue-400" />
                      ) : (
                        <Target className="w-4 h-4 text-purple-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white font-medium truncate">{result.title}</div>
                      <div className="text-slate-400 text-sm">{result.type === 'path' ? 'Learning Path' : 'Course'}</div>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="px-4 py-3 text-slate-400 text-center">
                No results found for "{query}"
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Search Icon */}
      <div className="md:hidden">
        <button
          onClick={handleMobileSearchClick}
          className="p-2 text-slate-400 hover:text-white transition-colors"
          aria-label="Search"
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Mobile Expanded Search Overlay */}
      {isMobileExpanded && (
        <div className="fixed inset-0 bg-slate-900 z-50 md:hidden">
          <div className="flex items-center p-4 border-b border-slate-700">
            <div className="flex-1 relative" ref={searchRef}>
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search courses and paths..."
                    value={query}
                    onChange={handleInputChange}
                    className="pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full text-base"
                  />
                </div>
              </form>
            </div>
            <button
              onClick={handleMobileClose}
              className="ml-4 p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Search Results */}
          {query.trim() !== '' && (
            <div className="flex-1 overflow-y-auto bg-slate-900">
              {isLoading ? (
                <div className="px-4 py-8 text-slate-400 text-center">
                  Searching...
                </div>
              ) : searchResults.length > 0 ? (
                <div className="divide-y divide-slate-700">
                  {searchResults.map((result) => (
                    <button
                      key={result.id}
                      onClick={() => handleResultClick(result.url)}
                      className="block w-full text-left px-4 py-4 bg-slate-800 hover:bg-slate-700 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex-shrink-0">
                          {result.type === 'path' ? (
                            <BookOpen className="w-5 h-5 text-blue-400" />
                          ) : (
                            <Target className="w-5 h-5 text-purple-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-white font-medium">{result.title}</div>
                          <div className="text-slate-400 text-sm mt-1">{result.type === 'path' ? 'Learning Path' : 'Course'}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-slate-400 text-center bg-slate-800">
                  No results found for "{query}"
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchBar;
