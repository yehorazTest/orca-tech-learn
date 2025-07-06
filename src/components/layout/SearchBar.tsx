
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { search } = useSearch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      search(searchQuery);
    }
  };

  return (
    <form onSubmit={handleSearch} className="hidden md:flex items-center">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search courses..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>
    </form>
  );
};

export default SearchBar;
