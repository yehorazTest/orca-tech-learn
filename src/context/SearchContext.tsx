
import React, { createContext, useContext, useState } from 'react';
import { SearchFilters, SearchResult } from '../types/learningPath';

interface SearchContextType {
  searchQuery: string;
  searchResults: SearchResult[];
  filters: SearchFilters;
  isLoading: boolean;
  search: (query: string) => void;
  updateFilters: (filters: Partial<SearchFilters>) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within SearchProvider');
  }
  return context;
};

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [isLoading, setIsLoading] = useState(false);

  const search = (query: string) => {
    setSearchQuery(query);
    setIsLoading(true);
    // TODO: Implement actual search logic
    setTimeout(() => {
      setSearchResults([]);
      setIsLoading(false);
    }, 500);
  };

  const updateFilters = (newFilters: Partial<SearchFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setFilters({});
  };

  return (
    <SearchContext.Provider value={{
      searchQuery,
      searchResults,
      filters,
      isLoading,
      search,
      updateFilters,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};
