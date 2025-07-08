import React from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface CourseFiltersProps {
  filters: {
    difficulty: string;
    category: string;
    tag: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    difficulty: string;
    category: string;
    tag: string;
  }>>;
  uniqueDifficulties: string[];
  uniqueCategories: string[];
  uniqueTags: string[];
  hasActiveFilters: boolean;
  onResetFilters: () => void;
}

const CourseFilters: React.FC<CourseFiltersProps> = ({
  filters,
  setFilters,
  uniqueDifficulties,
  uniqueCategories,
  uniqueTags,
  hasActiveFilters,
  onResetFilters
}) => {
  return (
    <div className="mb-8 p-6 bg-slate-800/50 rounded-lg border border-slate-700">
      <div className="flex items-center gap-4 mb-4">
        <Filter className="w-5 h-5 text-slate-400" />
        <h3 className="text-lg font-semibold text-white">Filter Courses</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetFilters}
            className="text-slate-400 hover:text-white"
          >
            <X className="w-4 h-4 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Difficulty Level
          </label>
          <Select 
            value={filters.difficulty} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, difficulty: value }))}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              {uniqueDifficulties.map(difficulty => (
                <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Category
          </label>
          <Select 
            value={filters.category} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, category: value }))}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              {uniqueCategories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Technology
          </label>
          <Select 
            value={filters.tag} 
            onValueChange={(value) => setFilters(prev => ({ ...prev, tag: value }))}
          >
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Technologies</SelectItem>
              {uniqueTags.slice(0, 10).map(tag => (
                <SelectItem key={tag} value={tag}>{tag}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default CourseFilters;