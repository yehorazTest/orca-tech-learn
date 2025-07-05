
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useSearch } from '../../context/SearchContext';
import { courses } from '../../data/courses';
import { learningPaths } from '../../data/learningPaths';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const { search } = useSearch();

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
  );
};

export default SearchBar;
