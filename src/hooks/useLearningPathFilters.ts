import React from 'react';
import { Course } from '../types/learningPath';

interface FilterState {
  difficulty: string;
  category: string;
  tag: string;
}

export const useLearningPathFilters = (allCourses: Course[]) => {
  const [filters, setFilters] = React.useState<FilterState>({
    difficulty: 'all',
    category: 'all',
    tag: 'all'
  });

  // Get all unique values for filters
  const uniqueDifficulties = [...new Set(allCourses.map(course => course.difficulty).filter(Boolean))];
  const uniqueCategories = [...new Set(allCourses.map(course => course.category).filter(Boolean))];
  const uniqueTags = [...new Set(allCourses.flatMap(course => course.tags))];

  // Filter function
  const filterCourses = (coursesToFilter: Course[]) => {
    return coursesToFilter.filter(course => {
      const difficultyMatch = filters.difficulty === 'all' || course.difficulty === filters.difficulty;
      const categoryMatch = filters.category === 'all' || course.category === filters.category;
      const tagMatch = filters.tag === 'all' || course.tags.includes(filters.tag);
      return difficultyMatch && categoryMatch && tagMatch;
    });
  };

  const resetFilters = () => {
    setFilters({
      difficulty: 'all',
      category: 'all',
      tag: 'all'
    });
  };

  const hasActiveFilters = Object.values(filters).some(filter => filter !== 'all');

  return {
    filters,
    setFilters,
    uniqueDifficulties,
    uniqueCategories,
    uniqueTags,
    filterCourses,
    resetFilters,
    hasActiveFilters
  };
};