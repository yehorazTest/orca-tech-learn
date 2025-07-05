import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Target } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const { searchResults } = useSearch();
  const searchResultsRef = useRef(searchResults);

  useEffect(() => {
    searchResultsRef.current = searchResults;
    setResults(searchResults);
  }, [searchResults]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setIsOpen(true);

    if (newQuery.trim() === '') {
      setResults([]);
      return;
    }

    setResults(searchResultsRef.current);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setIsOpen(true);
    }
  };

  return (
    <div className="hidden md:block relative flex-1 max-w-md mx-4">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search courses and paths..."
            value={query}
            onChange={handleInputChange}
            onFocus={() => setIsOpen(true)}
            className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          />
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto min-w-96">
          {results.map((result) => (
            <Link
              key={result.id}
              to={result.url}
              className="block px-4 py-3 hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-b-0"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
              }}
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
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
